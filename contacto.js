const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const tema = document.getElementById("tema")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    parrafo.innerHTML = ""
    if(nombre.nodeValue.length < 2){
        warnings += `Ingrese un nombre`
        entrar = false
    }
    if(apellido.nodeValue.length < 2){
        warnings += `Ingrese un apellido`
        entrar = false
    }
    if(!regexEmail.test(email.value)){
        warnings += `Ingrese un correo valido`
        entrar = false
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})