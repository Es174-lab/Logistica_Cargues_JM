document.addEventListener('DOMContentLoaded', function() {
    // Array para almacenar las asistencias
    let asistencias = obtenerAsistenciasGuardadas() || [];

    // Función para registrar la asistencia
    window.registrarAsistencia = function() {
        const employeeName = document.getElementById('employeeName').value;
        const entryTime = document.getElementById('entryTime').value;
        const exitTime = document.getElementById('exitTime').value;
        const attendanceStatus = document.getElementById('attendanceStatus').value;

        // Crear un objeto de asistencia
        const asistencia = {
            nombre: employeeName,
            horaEntrada: formatearHora(entryTime),
            horaSalida: formatearHora(exitTime),
            estado: attendanceStatus,
            fecha: new Date().toLocaleString()
        };

        // Agregar la asistencia al array
        asistencias.push(asistencia);

        // Limpiar el formulario
        document.getElementById('employeeName').value = '';
        document.getElementById('entryTime').value = '';
        document.getElementById('exitTime').value = '';
        document.getElementById('attendanceStatus').value = 'presente';

        // Guardar las asistencias en el almacenamiento local
        guardarAsistencias(asistencias);

        // Mostrar la lista actualizada de asistencias
        mostrarAsistencias();
    };

 // Función para mostrar las asistencias en la tabla HTML
function mostrarAsistencias() {
    const attendanceTableBody = document.querySelector('#attendanceTable tbody');
    attendanceTableBody.innerHTML = '';

    // Iterar sobre el array de asistencias y agregarlas a la tabla
    asistencias.forEach(function(asistencia, index) {
        const row = attendanceTableBody.insertRow();
        row.insertCell(0).innerHTML = asistencia.nombre;
        row.insertCell(1).innerHTML = asistencia.horaEntrada;
        row.insertCell(2).innerHTML = asistencia.horaSalida;
        row.insertCell(3).innerHTML = asistencia.estado;
        row.insertCell(4).innerHTML = asistencia.fecha;

        // Añadir botones de editar y eliminar
        const accionesCell = row.insertCell(5);
        const editarButton = document.createElement('button');
        editarButton.textContent = 'Editar';
        editarButton.className = 'editar'; // Agregamos la clase 'editar'
        editarButton.addEventListener('click', function() {
            editarAsistencia(index);
        });

        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.className = 'eliminar'; // Agregamos la clase 'eliminar'
        eliminarButton.addEventListener('click', function() {
            eliminarAsistencia(index);
        });

        accionesCell.appendChild(editarButton);
        accionesCell.appendChild(eliminarButton);
    });
}

//Funcion para eliminar una asistencia especifica
window.eliminarAsistencia = function (index) {
    if (confirm("¿Estàs seguro de que deseas eliminar esta asistencia?")) {
       //Eliminar la asistencia del array
       asistencias.splice(index, 1);
        
       //Guardar el array actualizado en el almacenamiento local
       guardarAsistencias(asistencias);

       //Actualizar la lista de asistencias en la tabla
       mostrarAsistencias();
    }
};

//Funcion para editar una asistencia especifica 
window.editarAsistencia = function (index) {
    //Obtener la asistencia a editar 
    const asistenciaEditar = asistencias[index];

    //Mostrar un formulario de edicion
    const nuevoNombre = prompt("Nuevo nombre del empleado:", asistenciaEditar.nombre);
    const nuevaHoraEntrada = prompt("Nueva hora de entrada:", asistenciaEditar.horaEntrada);
    const nuevaHoraSalida = prompt("Nueva hora de salida:", asistenciaEditar.horaSalida);
    const nuevoEstado = prompt("Nuevo estado de asistencia:", asistenciaEditar.estado);

    //Actualizar los detalles de la asistencia
    asistenciaEditar.nombre = nuevoNombre || asistenciaEditar.nombre;
    asistenciaEditar.horaEntrada = nuevaHoraEntrada || asistenciaEditar.horaEntrada;
    asistenciaEditar.horaSalida = nuevaHoraSalida || asistenciaEditar.horaSalida;
    asistenciaEditar.estado = nuevoEstado || asistenciaEditar.estado;

    //Guardar las asistencias actualizadas en el almacenamiento local 
    guardarAsistencias(asistencias);

    //Actualizar la lista de asistencias en la tabla
    mostrarAsistencias();
};

    // Función para formatear la hora en formato AM/PM
    function formatearHora(hora) {
        const partes = hora.split(':');
        const horas = parseInt(partes[0]);
        const minutos = parseInt(partes[1]);

        if (horas >= 12) {
            return `${horas === 12 ? horas : horas - 12}:${minutos} PM`;
        } else {
            return `${horas}:${minutos} AM`;
        }
    }

    // Función para guardar las asistencias en el almacenamiento local
    function guardarAsistencias(asistencias) {
        localStorage.setItem('asistencias', JSON.stringify(asistencias));
    }

    // Función para obtener las asistencias guardadas del almacenamiento local
    function obtenerAsistenciasGuardadas() {
        const asistenciasGuardadas = localStorage.getItem('asistencias');
        return asistenciasGuardadas ? JSON.parse(asistenciasGuardadas) : null;
    }

    // Llamar a mostrarAsistencias al cargar la página
    mostrarAsistencias();
});

// Función para retroceder a la página anterior
function regresar() {
    window.history.back();
}

function guardarPDF() {
    const table = document.getElementById('attendanceTable');

    // Verificar si la tabla existe
    if (!table) {
        console.error('No se encontró la tabla de asistencias.');
        return;
    }

    const tableClone = table.cloneNode(true); 
    const options = {
        filename: 'registros_asistencias.pdf',
        image: { type: 'jpeg', quality: 0.98 }, // Agregar esta línea para mejorar la calidad de las imágenes en el PDF
        jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' } // Agregar esta línea para definir el formato del documento
    };

    // Eliminar la última columna (Acciones)
    const lastColumnIndex = tableClone.rows[0].cells.length - 1;
    for (let i = 0; i < tableClone.rows.length; i++) {
        tableClone.rows[i].deleteCell(lastColumnIndex);
    }

    const content = document.createElement('div');
    content.appendChild(tableClone);

    // Utilizar html2pdf para generar el PDF
    html2pdf().from(content).set(options).save().then(() => {
        console.log('PDF generado exitosamente.');
    }).catch((error) => {
        console.error('Error al generar el PDF:', error);
    });
}