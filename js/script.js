//ICONO PERFIL
document.addEventListener("DOMContentLoaded", function(){
    //Obtencion del enlace de la imagen perfil
    var enlacePerfil = document.getElementById("enlacePerfil");

    //Agregue un evento click en el enlace de la imagen 
    enlacePerfil.addEventListener("click", function (event){
        event.preventDefault();

        //Correcion de la funcion openPopup para que los parametros se pasen correctamente
        openPopup("formularios.html", "Iniciar Sesion o Registrarse", 400, 300)
    });

    //Funcion para abrir la ventana emergente
    function openPopup(url, title, width, height) {
        var left = (window.innerWidth - width) / 2;
        var top = (window.innerHeight - height) / 2;

        window.open(
            url, 
            title,
            "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top
        );
    }
});

//Ventana emergente para nosotros
document.addEventListener("DOMContentLoaded", function() {
    const enlaceNosotros = document.getElementById('enlaceNosotros');
    
    enlaceNosotros.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      
      // Abre una ventana emergente con el contenido de nosotros.html
      const ventanaEmergente = window.open('./nosotros.html', 'Nosotros', 'width=600,height=400');
      
      // Si la ventana emergente no pudo abrirse, redirige a nosotros.html en la misma ventana
      if (ventanaEmergente === null) {
        window.location.href = './nosotros.html';
      }
    });
});

//Ventana emergente para contactos
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el botón "Contactanos"
    var botonContactanos = document.querySelector("#botonContactanos");

    // Agregamos un evento clic al botón
    botonContactanos.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        // Abrir una ventana emergente y cargar el contenido de contacto.html
        var ventanaEmergente = window.open("./contactos.html", "contacto", "width=600,height=400");
    });
});