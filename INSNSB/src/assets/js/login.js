// Obtener el modal y el enlace para abrirlo
var modal = document.getElementById("myModal");
var link = document.getElementById("reestablecer");

// Obtener el elemento de cierre del modal
var closeModal = document.getElementById("closeModal");

// Cuando se hace clic en el enlace, mostrar el modal
link.onclick = function() {
    modal.style.display = "block";
}

// Cuando se hace clic en el botón de cierre del modal, ocultar el modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Cuando se hace clic en cualquier parte fuera del modal, ocultar el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("enviarCorreo").addEventListener("click",(e)=>{
    var nombres = document.getElementById("nombre").value
    var area = document.getElementById("area").value
    e.preventDefault();
    if(nombres!="" && area!=""){
        correo();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Rellene todos los campos',
        })
    }
});

function correo(){
    //enviar correo
    Swal.fire(
        'Se envío requerimiento al equipo',
        'En breve nos comunicaremos contigo vía correo',
        'success'
    )
    setTimeout(function() {
        location.reload(true);
    }, 3000);
}


var ingreso = document.getElementById("go")
var modal2 = document.getElementById("myModal2")


ingreso.onclick = function(e) {
    var usuario = document.getElementById("user").value
    var contraseña = document.getElementById("password").value
    e.preventDefault();

    if(usuario!="" && contraseña!=""){
        modal2.style.display = "block";
        setTimeout(function() {
            window.location.href="/src/assets/views/inicio.html";
        }, 1500);

    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Rellene todos los campos',
        })
    }
    
}