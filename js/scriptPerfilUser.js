// Función para abrir el formulario de edición
function openEditForm() {
    document.getElementById("editForm").style.display = "block";
}

// Función para cerrar el formulario de edición
function closeEditForm() {
    document.getElementById("editForm").style.display = "none";
}

// Función para guardar los cambios y actualizar el perfil de usuario
function saveChange() {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    var newName = document.getElementById("newName").value;
    var newEmail = document.getElementById("newEmail").value;
    var newDateOfBirth = document.getElementById("newDateOfBirth").value;
    var newCity = document.getElementById("newCity").value;
    var newPosition = document.getElementById("newPosition").value;
    var newPhone = document.getElementById("newPhone").value;

    // Actualizar el perfil de usuario con los nuevos valores
    document.getElementById("username").innerText = newName;
    document.getElementById("email").innerText = "Correo electrónico: " + newEmail;
    document.getElementById("fechaNacimiento").innerText = "Fecha de nacimiento: " + newDateOfBirth;
    document.getElementById("ciudad").innerText = "Ciudad: " + newCity;
    document.getElementById("cargo").innerText = "Cargo: " + newPosition;
    document.getElementById("telefono").innerText = "Teléfono: " + newPhone;

    // Guardar los cambios en el almacenamiento local del navegador
    localStorage.setItem("username", newName);
    localStorage.setItem("email", newEmail);
    localStorage.setItem("fechaNacimiento", newDateOfBirth);
    localStorage.setItem("ciudad", newCity);
    localStorage.setItem("cargo", newPosition);
    localStorage.setItem("telefono", newPhone);

    // Cerrar el formulario de edición
    closeEditForm();
}

// Función para cargar los datos del perfil desde el almacenamiento local
function loadProfileData() {
    // Obtener los datos del almacenamiento local
    var newName = localStorage.getItem("username");
    var newEmail = localStorage.getItem("email");
    var newDateOfBirth = localStorage.getItem("fechaNacimiento");
    var newCity = localStorage.getItem("ciudad");
    var newPosition = localStorage.getItem("cargo");
    var newPhone = localStorage.getItem("telefono");

    // Actualizar el perfil de usuario con los datos almacenados
    document.getElementById("username").innerText = newName;
    document.getElementById("email").innerText = "Correo electrónico: " + newEmail;
    document.getElementById("fechaNacimiento").innerText = "Fecha de nacimiento: " + newDateOfBirth;
    document.getElementById("ciudad").innerText = "Ciudad: " + newCity;
    document.getElementById("cargo").innerText = "Cargo: " + newPosition;
    document.getElementById("telefono").innerText = "Teléfono: " + newPhone;
}

// Cargar los datos del perfil al cargar la página
loadProfileData();

// Función para cargar una nueva imagen de perfil
function uploadImage() {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener la nueva imagen de perfil
    var newImage = document.getElementById("newImage").files[0];

    // Validar que se ha seleccionado una imagen
    if (newImage) {
        // Crear un objeto de FileReader
        var reader = new FileReader();

        // Definir la función de carga de la imagen
        reader.onload = function(e) {
            // Asignar la nueva imagen al elemento de imagen de perfil
            document.getElementById("profileImg").src = e.target.result;
        }

        // Leer la nueva imagen como URL de datos
        reader.readAsDataURL(newImage);
    }

    // Cerrar el formulario de carga de imagen
    closeImageUploadForm();
}

// Función para abrir el formulario de carga de imagen
function openImageUploadForm() {
    // Aquí puedes mostrar un formulario de carga de imagen o cualquier otra interfaz que desees utilizar
    // En este ejemplo, se muestra un input de tipo file para seleccionar una imagen
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var imageUrl = e.target.result;
                changeProfilePicture(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Función para cambiar la imagen de perfil
function changeProfilePicture(imageUrl) {
    // Obtener el elemento de la imagen de perfil
    var profilePicture = document.querySelector('.profile-picture');
    
    // Cambiar la URL de la imagen de perfil
    profilePicture.src = imageUrl;

// Función para cargar una nueva imagen de perfil
function uploadImage() {
    // Obtener la nueva imagen de perfil
    var newImage = document.getElementById("newImage").files[0];

    // Validar que se ha seleccionado una imagen
    if (newImage) {
        // Crear un objeto de FileReader
        var reader = new FileReader();

        // Definir la función de carga de la imagen
        reader.onload = function(e) {
            // Asignar la nueva imagen al elemento de imagen de perfil
            document.getElementById("profileImg").src = e.target.result;
        }

        // Leer la nueva imagen como URL de datos
        reader.readAsDataURL(newImage);
    }
}


// Función para guardar los cambios, incluida la imagen de perfil, y actualizar el perfil de usuario
function saveChange() {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    var newName = document.getElementById("newName").value;
    var newEmail = document.getElementById("newEmail").value;
    var newDateOfBirth = document.getElementById("newDateOfBirth").value;
    var newCity = document.getElementById("newCity").value;
    var newPosition = document.getElementById("newPosition").value;
    var newPhone = document.getElementById("newPhone").value;

    // Actualizar el perfil de usuario con los nuevos valores
    document.getElementById("username").innerText = newName;
    document.getElementById("email").innerText = "Correo electrónico: " + newEmail;
    document.getElementById("fechaNacimiento").innerText = "Fecha de nacimiento: " + newDateOfBirth;
    document.getElementById("ciudad").innerText = "Ciudad: " + newCity;
    document.getElementById("cargo").innerText = "Cargo: " + newPosition;
    document.getElementById("telefono").innerText = "Teléfono: " + newPhone;

    // Guardar los cambios en el almacenamiento local del navegador
    localStorage.setItem("username", newName);
    localStorage.setItem("email", newEmail);
    localStorage.setItem("fechaNacimiento", newDateOfBirth);
    localStorage.setItem("ciudad", newCity);
    localStorage.setItem("cargo", newPosition);
    localStorage.setItem("telefono", newPhone);

    // Obtener la URL de la nueva imagen de perfil
    var imageUrl = document.getElementById("profileImg").src;

    // Guardar la URL de la imagen de perfil en el almacenamiento local
    localStorage.setItem("profileImage", imageUrl);

    // Cerrar el formulario de edición
    closeEditForm();
}

}