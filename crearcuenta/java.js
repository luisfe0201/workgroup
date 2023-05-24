
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("user")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const creado = document.getElementById("exi")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings =""
    let entrar=false
    let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML=""
   
    if (nombre.value.length <3){
    warnings += "El nombre debe tener minimo 3 letras <br>"
    entrar=true
}
if (apellido.value.length <3){
    warnings += "El apellido debe tener minimo 3 letras <br>"
    entrar=true
}

if(!regexEmail.test (email.value)){
    warnings+= "El Email no es valido <br>"
    entrar=true
}

if (pass.value.length <6){
    warnings +="La contraseña debe tener minimo 6 digitos <br>"
    entrar= true
}
if(entrar){
    parrafo.innerHTML=warnings
} else{ creado.innerHTML="¡Biembenido! <br> ''Cuenta creada exitosamente''" }

})