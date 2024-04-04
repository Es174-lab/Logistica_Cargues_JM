// FORMULARIOS REGISTER Y LOGIN
const btnSignIn = document.getElementById("sign-in"),
    btnSignUp = document.getElementById("sign-up"),
    formRegister = document.querySelector(".register"),
    formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e => {
    if (formRegister.classList.contains("hide")) {
    }
});

// Evitar que el formulario de registro se envíe al hacer clic en "Iniciar Sesión"
formRegister.querySelector(".form").addEventListener("submit", e => {
    e.preventDefault();

    alert("Usuario registrado correctamente");
    window.location.href = "admin.html"
});

// Evitar que el formulario de inicio de sesión se envíe al hacer clic en "Registrarse"
formLogin.querySelector(".form").addEventListener("submit", e => {
    e.preventDefault();

    window.location.href = "admin.html"
});


function mostrarPerfilDeUsuario(username, bio) {
    document.getElementById("username").innerText = username;
    document.getElementById("bio").innerText = bio;
    document.getElementById("user-profile").classList.remove("hide");
}

// Actualiza el event listener de 'btnSignUp'
btnSignUp.addEventListener("click", e => {
    if (formRegister.classList.contains("hide")) {

        // Simular datos de usuario (reemplaza con los datos reales del usuario)
        const username = "NuevoUsuario";
        const bio = "Este es un nuevo usuario.";

        // Mostrar el perfil del usuario
        mostrarPerfilDeUsuario(username, bio);
    }
});