 window.onload = function(){
     let formulario = document.querySelector(".contForm")
     formulario.addEventListener("submit" ,function(event){
        event.preventDefault()
        let nombre = document.querySelector("#nombre")
        if (nombre.value == "" || nombre.value.length < 2) {
            alert("Ingrese nombre valido")
        }
        let apellido = document.querySelector("#apellido")
        if (apellido.value.length < 2 || apellido.value == "") {
            alert ("Ingrese bien el apellido")
        }
         let email = document.querySelector("#email")
         if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
             alert("Ingrese mail valido")
        }
        let contrasenia = document.querySelector("#contrasenia")
        if (contrasenia.value == "" || contrasenia.value.length < 8) {
            alert("Ingrese contraseña valida")
        }
        let contrasenia2 = document.querySelector("#contrasenia2")
        if (contrasenia2.value != contrasenia.value) {
            alert("Las contraseñas no coinciden")
        }
        let imagen = document.querySelector("#imagen")
        const file = imagen.files[0]
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

        if (!allowedTypes.includes(file.type)) {
           alert("Ingrese imagen en formato jpg,jpeg,png o gif")
        }
        return true
        alert()
  })

   
}