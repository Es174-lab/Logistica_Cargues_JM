//REGISTRO DE OPERACIONES
let listaRegistros = [];

const objRegistro = {
    id: '',
    fecha: '',
    transporte: '',
    placa: '',
    tipoVeh: '',
    operacion: '',
    tarifa: '',
    transportadora: '',
    nomCond: '',
    cedula: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const fechaImput = document.querySelector('#fecha');
const transporteImput = document.querySelector('#transporte');
const placaImput = document.querySelector('#placa');
const tipoVehImput = document.querySelector('#tipoVeh');
const operacionImput = document.querySelector('#operacion');
const tarifaImput = document.querySelector('#tarifa');
const transportadoraImput = document.querySelector('#transportadora');
const nomCondImput = document.querySelector('#nomCond');
const cedulaImput = document.querySelector('#cedula');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    // Deshabilitar el botón de agregar temporalmente
    btnAgregar.disabled = true;

    if (fechaImput.value === '' || transporteImput.value === '' || placaImput.value === '' || tipoVehImput.value === '' || operacionImput.value === '' || tarifaImput.value === '' || transportadoraImput.value === '' || nomCondImput.value === '' || cedulaImput.value === '') {
        alert('Todos los campos son obligatorios.');
        // Habilitar el botón de agregar nuevamente
        btnAgregar.disabled = false;
        return;
    }

    if (editando) {
        guardarCambios(objRegistro.id)
    } else {
        objRegistro.id = listaRegistros.length;
        objRegistro.fecha = fechaImput.value;
        objRegistro.transporte = transporteImput.value;
        objRegistro.placa = placaImput.value;
        objRegistro.tipoVeh = tipoVehImput.value;
        objRegistro.operacion = operacionImput.value;
        objRegistro.tarifa = tarifaImput.value;
        objRegistro.transportadora = transportadoraImput.value;
        objRegistro.nomCond = nomCondImput.value;
        objRegistro.cedula = cedulaImput.value;

        agregarRegistro();
        limpiarFormulario();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    cargarRegistrosGuardados();
    mostrarRegistros();
});

function limpiarFormulario() {
    fechaImput.value = '';
    transporteImput.value = '';
    placaImput.value = '';
    tipoVehImput.value = '';
    operacionImput.value = '';
    tarifaImput.value = '';
    transportadoraImput.value = '';
    nomCondImput.value = '';
    cedulaImput.value = '';
}

function cargarRegistrosGuardados() {
    const registrosGuardados = obtenerRegistrosGuardados();
    if (registrosGuardados) {
        listaRegistros = registrosGuardados;
        mostrarRegistros();
    }
}

function guardarRegistros(registros) {
    localStorage.setItem('registros', JSON.stringify(registros));
}

function obtenerRegistrosGuardados() {
    const registrosGuardados = localStorage.getItem('registros');
    return registrosGuardados ? JSON.parse(registrosGuardados) : null;
}

// Añadir la carga de registros al evento "DOMContentLoaded"
document.addEventListener('DOMContentLoaded', function () {
    cargarRegistrosGuardados();
    mostrarRegistros();
});

// Modificar la función agregarRegistro para guardar los registros automáticamente
function agregarRegistro() {
    // Verificar si el registro ya existe en la lista
    const existeRegistro = listaRegistros.some(registro => {
        return (
            registro.fecha === objRegistro.fecha &&
            registro.transporte === objRegistro.transporte &&
            registro.placa === objRegistro.placa &&
            registro.tipoVeh === objRegistro.tipoVeh &&
            registro.operacion === objRegistro.operacion &&
            registro.tarifa === objRegistro.tarifa &&
            registro.transportadora === objRegistro.transportadora &&
            registro.nomCond === objRegistro.nomCond &&
            registro.cedula === objRegistro.cedula
        );
    });

    // Si el registro no existe, agregarlo a la lista
    if (!existeRegistro) {
        listaRegistros.push({...objRegistro});
        guardarRegistros(listaRegistros); // Guardar la lista actualizada en el almacenamiento local
        mostrarRegistros();
    } else {
        alert('El registro ya existe.');
    }

    // Habilitar el botón de agregar nuevamente
    btnAgregar.disabled = false;
    }

    // Agregar una función para cargar los registros guardados
    function cargarRegistrosGuardados() {
        const registrosGuardados = obtenerRegistrosGuardados();
        if (registrosGuardados) {
            listaRegistros = registrosGuardados;
        }
    }

// Agregar una función para guardar los registros en el almacenamiento local
function guardarRegistros(registros) {
    localStorage.setItem('registros', JSON.stringify(registros));
}

// Agregar una función para obtener los registros guardados del almacenamiento local
function obtenerRegistrosGuardados() {
    const registrosGuardados = localStorage.getItem('registros');
    return registrosGuardados ? JSON.parse(registrosGuardados) : [];
}

function mostrarRegistros() {
    const tablaRegistrosBody = document.getElementById('tablaRegistrosBody');

    // Limpiar la tabla antes de agregar los registros actualizados
    tablaRegistrosBody.innerHTML = '';

    listaRegistros.forEach((registro, index) => {
        const { id, fecha, transporte, placa, tipoVeh, operacion, tarifa, transportadora, nomCond, cedula } = registro;

        const fila = document.createElement('tr');

        // Crear celdas para cada columna
        const columnaFecha = document.createElement('td');
        columnaFecha.textContent = fecha;
        fila.appendChild(columnaFecha);

        const columnaTransporte = document.createElement('td');
        columnaTransporte.textContent = transporte;
        fila.appendChild(columnaTransporte);

        const columnaPlaca = document.createElement('td');
        columnaPlaca.textContent = placa;
        fila.appendChild(columnaPlaca);

        const columnaTipoVeh = document.createElement('td');
        columnaTipoVeh.textContent = tipoVeh;
        fila.appendChild(columnaTipoVeh);

        const columnaOperacion = document.createElement('td');
        columnaOperacion.textContent = operacion;
        fila.appendChild(columnaOperacion);

        const columnaTarifa = document.createElement('td');
        columnaTarifa.textContent = tarifa;
        fila.appendChild(columnaTarifa);

        const columnaTransportadora = document.createElement('td');
        columnaTransportadora.textContent = transportadora;
        fila.appendChild(columnaTransportadora);

        const columnaNombre = document.createElement('td');
        columnaNombre.textContent = nomCond;
        fila.appendChild(columnaNombre);

        const columnaCedula = document.createElement('td');
        columnaCedula.textContent = cedula;
        fila.appendChild(columnaCedula);

        // Celdas para las acciones
        const columnaAcciones = document.createElement('td');

        // Boton editar 
        const botonEditar = document.createElement('button');
        botonEditar.innerHTML = '<i class="fas fa-edit" style="color:blue;"></i>';
        botonEditar.onclick = function() {
            // Al hacer clic en editar, se ejecuta la función editarRegistro
            editarRegistro(id);
        };
        columnaAcciones.appendChild(botonEditar);

        // Botón de eliminar (rojo)
        const botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = '<i class="fas fa-trash-alt" style="color:red;"></i>';
        botonEliminar.addEventListener('click', function() {
            // Al hacer clic en eliminar, se ejecuta la función eliminarRegistro
            eliminarRegistro(id);
        });
        columnaAcciones.appendChild(botonEliminar);

        fila.appendChild(columnaAcciones);
        // Agregar la fila a la tabla
        tablaRegistrosBody.appendChild(fila);
    });
}
0

function editarRegistro(id) {
    // Buscar el registro en la lista utilizando su ID
    const registro = listaRegistros.find(registro => registro.id === id);

    // Llenar el formulario con los datos del registro encontrado
    fechaImput.value = registro.fecha;
    transporteImput.value = registro.transporte;
    placaImput.value = registro.placa;
    tipoVehImput.value = registro.tipoVeh;
    operacionImput.value = registro.operacion;
    tarifaImput.value = registro.tarifa;
    transportadoraImput.value = registro.transportadora;
    nomCondImput.value = registro.nomCond;
    cedulaImput.value = registro.cedula;

    // Habilitar la bandera de edición
    editando = true;

    // Actualizar el ID del registro que se está editando
    objRegistro.id = id;

    // Cambiar el texto del botón de agregar a "Guardar cambios"
    btnAgregar.textContent = 'Guardar cambios';
}

function eliminarRegistro(id) {
    // Filtrar la lista para obtener todos los registros excepto el que tiene el ID proporcionado
    listaRegistros = listaRegistros.filter(registro => registro.id !== id);

    // Guardar la lista actualizada en el almacenamiento local
    guardarRegistros(listaRegistros);

    // Volver a mostrar los registros en la tabla
    mostrarRegistros();
}
        
// Función para retroceder a la página anterior
function regresar() {
    window.history.back();
}

//Boton PDF
document.getElementById('guardarPDF').addEventListener('click', () => {
    // Obtener el contenido de la tabla excluyendo la columna de acciones
    const tablaRegistros = document.getElementById('tablaRegistros');
    const contenidoExportar = tablaRegistros.cloneNode(true);
    const filas = contenidoExportar.querySelectorAll('tr');
    filas.forEach(fila => {
        fila.removeChild(fila.lastChild); // Eliminar la última celda de cada fila (columna de acciones)
    });

    // Formatear la fecha con moment.js antes de generar el PDF
    const fechaActual = moment().format('YYYY-MM-DD');

    // Configurar opciones para html2pdf
    const opciones = {
        margin: 5,
        filename: 'registros_operaciones.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generar el archivo PDF
    html2pdf().from(contenidoExportar).set(opciones).save();

    // Restaurar el contenido original
    contenidoExportar.innerHTML = contenidoExportar.innerHTML.replace(`<span>${fechaActual}</span>`, '<input type="date" id="fecha" placeholder="Ingresa la fecha">');
});

// botón de vaciar registros
document.getElementById('vaciarRegistros').addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas vaciar todos los registros?')) {
        vaciarRegistros();
    }
});

function vaciarRegistros() {
    // Vaciar la lista de registros
    listaRegistros = [];
    
    // Guardar la lista vacía en el almacenamiento local
    guardarRegistros(listaRegistros);

    // Limpiar la tabla
    const tablaRegistrosBody = document.getElementById('tablaRegistrosBody');
    tablaRegistrosBody.innerHTML = ''; // Esto eliminará todas las filas de la tabla
}

function guardarCambios(id) {
    // Buscar el índice del registro en la lista usando su ID
    const index = listaRegistros.findIndex(registro => registro.id === id);

    if (index !== -1) {
        // Actualizar el registro en la lista con los nuevos valores
        listaRegistros[index] = {
            id,
            fecha: fechaImput.value,
            transporte: transporteImput.value,
            placa: placaImput.value,
            tipoVeh: tipoVehImput.value,
            operacion: operacionImput.value,
            tarifa: tarifaImput.value,
            transportadora: transportadoraImput.value,
            nomCond: nomCondImput.value,
            cedula: cedulaImput.value,
        };

        // Volver a mostrar los registros actualizados en la tabla
        mostrarRegistros();

        // Limpiar el formulario y cambiar el botón a su estado original
        limpiarFormulario();
        btnAgregar.textContent = 'Agregar';
        editando = false; // Restablecer el estado de edición a false
    }
}