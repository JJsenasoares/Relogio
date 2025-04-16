let horasInput = document.querySelector("#horas")
let minutoInput = document.querySelector("#minutos")
let segundosInput = document.querySelector("#segundos")



setInterval(() => {
    let date = new Date()
    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()
    
    horasInput.innerHTML = horas
    minutoInput.innerHTML = minutos
    segundosInput.innerHTML = segundos

    if(segundos < 10) {
        segundosInput.innerHTML =`0${segundos}` ;
    }
}, 1000);