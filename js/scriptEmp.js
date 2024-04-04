//Obtencion de la tabla  y las filas 
var table = document.querySelector('table');
var rows = table.querySelectorAll('tr');

//Filtracion de la tabla en la funcion de la entrada de busqueda 
function filterTable() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();

    for (var i=0; i< rows.length; i++){
        var td = rows[i].getElementsByTagName('td')[0];

        if (td) {
            var textValue = td.textContent || td.innerText;

            if (textValue.toUpperCase().indexOf(filter)> -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
}

// Agregar evento de clic a las filas para abrir la ventana emergente
for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener('click', function () {
        // Obtener el nombre del empleado de la fila clicada
        var name = this.querySelector('td').innerText;

        // Mostrar la ventana emergente con los datos del empleado
        openModal(name);
    });
}

// Función para abrir la ventana emergente
function openModal(name) {
    var modal = document.getElementById('employeeModal');
    var employeeData = document.getElementById('employeeData');

    var employeeDetails = {
        'AGUDELO VASQUEZ IVAN': {
            'Nombre': 'Ivan Agudelo Vasquez',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '3483437',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de Carga'
        },
        'CADAVID VANEGAS ROBERTO': {
            'Nombre': 'Roberto Cadavid Vanegas',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '70326691',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de Carga'
        },
        'CARVAJAL ESCALANTE JOHAN SEBASTIAN': {
            'Nombre': 'Johan Sebastian Carvajal Escalante',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1000633454',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de Carga'
        },

        'FLOREZ QUINTERO SARGEY MANUEL': {
            'Nombre': 'Sargey Manuel Florez Quintero',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1102844854',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'GIRALDO VARGAS JUAN CAMILO': {
            'Nombre': 'Juan Camilo Giraldo Vargas',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1020465304',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'HERNANDEZ GOMEZ JOHANDER JOSE': {
            'Nombre': 'Johander Jose Hernandez Gomez',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1126239502',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'ISAZA GIOVANNY ARLEY': {
            'Imagen': './Imagenes/feid.jpg',
            'Nombre': 'Giovanny Arley Isaza',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '71223441',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'JIMENEZ ALVAREZ LUIS ALFONSO': {
            'Nombre': 'Luis Alfonso Jimenez Alvarez',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '98531021',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'LOAIZA ZULETA JANIER YAIRTON': {
            'Nombre': 'Janier Yairton Loaiza Zuleta',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '98623564',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'LONDOÑO ESCALANTE JUAN MANUEL': {
            'Nombre': 'Juan Manuel Londoño Escalante',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1021802161',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'MENA CUESTA PABLO ALIRIO': {
            'Nombre': 'Pablo Alirio Mena Cuesta',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '11800042',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'MORALES CASTRILLON NESTOR ADAN': {
            'Nombre': 'Nestor Adan Morales Castrillon',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '70286722',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'ORTEGA RAMIREZ RICHARD': {
            'Nombre': 'Richard Ortega Ramirez',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1017202440',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Coordinador de Operación'
        },
        'PALACIOS ZAPATA ALEJANDRO': {
            'Nombre': 'Alejandro Palacios Zapata',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1035441648',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'QUIROZ CORREA KEVIN ALEXANDER': {
            'Nombre': 'Kevin Alexander Quiroz Correa',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1000886564',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'RESTREPO JIMENEZ JAMES ANDRES': {
            'Nombre': 'James Andres Restrepo Jimenez',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1036618124',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Operario de carga'
        },
        'SANCHEZ ALVAREZ JHOAN': {
            'Imagen': './Imagenes/feid.jpg',
            'Nombre': 'Jhoan Sanchez Alvarez',
            'Fecha de Nacimiento': '01/01/1990',
            'Cedula': '1036632360',
            'Fecha de Expedicion': '02/02/2010',
            'Direccion': 'Calle 123, Ciudad',
            'Tipo de Sangre': 'A+',
            'Telefono': '123-456-789',
            'Cargo': 'Coordinador de Operación'
        },
    };

    if (employeeDetails.hasOwnProperty(name)) {
        var details = employeeDetails[name];
        var detailsHTML = '';

        for (var prop in details) {
            if (details.hasOwnProperty(prop)) {
                if (prop === 'Imagen') {
                    detailsHTML += '<strong>' + prop + ':</strong> <img src=""' + details[prop] + '" alt="Imagen del empleado"><br>';
                } else {
                    detailsHTML += '<strong>' + prop + ':</strong> ' + details[prop] + '<br>';
                }
            }
        }

        employeeData.innerHTML = detailsHTML;
        modal.style.display = 'block';
    }
}

// Función para cerrar la ventana emergente
function closeModal() {
    var modal = document.getElementById('employeeModal');
    modal.style.display = 'none';
}

// Función para retroceder a la página anterior
function regresar() {
    window.history.back();
}

// Objeto para almacenar los detalles de los empleados
var employeeDetails = {};

// Función para cargar los detalles de los empleados desde el almacenamiento local
function cargarDetallesEmpleados() {
    var detallesGuardados = localStorage.getItem('empleados');
    if (detallesGuardados) {
        employeeDetails = JSON.parse(detallesGuardados);
        for (var nombreEmpleado in employeeDetails) {
            if (employeeDetails.hasOwnProperty(nombreEmpleado)) {
                // Agregar cada empleado a la tabla al cargar la página
                actualizarTabla(nombreEmpleado);
            }
        }
        // Asignar evento de clic a las filas para abrir la ventana emergente
        asignarEventosFilas();
    }
}

// Función para asignar eventos de clic a las filas de la tabla
function asignarEventosFilas() {
    var filas = document.querySelectorAll('table tbody tr');
    filas.forEach(function (fila) {
        fila.addEventListener('click', function () {
            var nombreEmpleado = this.querySelector('td').innerText;
            openModal(nombreEmpleado);
        });
    });
}


// Llamar a la función para cargar los detalles de los empleados al cargar la página
cargarDetallesEmpleados();

// Función para agregar un nuevo empleado
function agregarEmpleado() {
    // Solicitar los datos del nuevo empleado al usuario
    var nombre = prompt("Ingrese el nombre del nuevo empleado:");
    var fechaNacimiento = prompt("Ingrese la fecha de nacimiento del nuevo empleado (DD/MM/AAAA):");
    var cedula = prompt("Ingrese la cédula del nuevo empleado:");
    var fechaExpedicion = prompt("Ingrese la fecha de expedición de la cédula del nuevo empleado (DD/MM/AAAA):");
    var direccion = prompt("Ingrese la dirección del nuevo empleado:");
    var tipoSangre = prompt("Ingrese el tipo de sangre del nuevo empleado:");
    var telefono = prompt("Ingrese el teléfono del nuevo empleado:");
    var cargo = prompt("Ingrese el cargo del nuevo empleado:");

    // Crear un objeto con los datos del nuevo empleado
    var nuevoEmpleado = {
        'Nombre': nombre,
        'Fecha de Nacimiento': fechaNacimiento,
        'Cedula': cedula,
        'Fecha de Expedicion': fechaExpedicion,
        'Direccion': direccion,
        'Tipo de Sangre': tipoSangre,
        'Telefono': telefono,
        'Cargo': cargo
    };

    // Agregar el nuevo empleado al objeto employeeDetails
    employeeDetails[nombre] = nuevoEmpleado;

    // Guardar los detalles del empleado en el almacenamiento local del navegador
    localStorage.setItem('empleados', JSON.stringify(employeeDetails));

    // Actualizar la tabla con el nuevo empleado
    actualizarTabla(nombre);

    // Mostrar los detalles del nuevo empleado en la ventana emergente
    openModal(nombre);
}

// Función para actualizar la tabla con el nuevo empleado
function actualizarTabla(nombre) {
    var table = document.querySelector('table');
    var tbody = table.querySelector('tbody');

    // Crear una nueva fila para el nuevo empleado
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    newCell.textContent = nombre;
    newRow.appendChild(newCell);

    // Agregar la nueva fila al cuerpo de la tabla
    tbody.appendChild(newRow);

    // Agregar evento de clic a la nueva fila para abrir la ventana emergente
    newRow.addEventListener('click', function () {
        openModal(nombre);
    });

    // Abrir la ventana emergente con los detalles del nuevo empleado
    openModal(nombre);
}