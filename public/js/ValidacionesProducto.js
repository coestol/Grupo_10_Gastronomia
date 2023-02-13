window.onload = function(){
     let formulario = document.querySelector(".contenedorFormulario")
     formulario.addEventListener("submit" ,function(event){
        event.preventDefault()
        let nombre = document.querySelector("#nombre")
        if (nombre.value == "" || nombre.value.length < 5) {
           alert("Ingrese nombre valido")
        }
        let descripcion = document.querySelector("#descripcion")
       if (descripcion.value.length < 20 ) {
           alert ("Ingrese descripcion valida")
        }
     })
    
}