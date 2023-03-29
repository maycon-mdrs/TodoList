const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const dia = document.querySelector("#dia");

const relogio = setInterval(()=>{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();
    let day = date.getDay();

    if(hr < 10) {
        hr = '0' + hr;
    }
    if(min < 10) {
        min = '0' + min;
    }
    if(seg < 10) {
        seg = '0' + seg;
    }

    switch(day) {
        case 0:
            dia.textContent = "Domingo";
            break;
        case 1:
            dia.textContent = "Segunda";
            break;
        case 2:
            dia.textContent = "Terça";
            break;
        case 3:
            dia.textContent = "Quarta";
            break;
        case 4:
            dia.textContent = "Quinta";
            break;
        case 5:
            dia.textContent = "Sexta";
            break;
        case 6:
            dia.textContent = "Sábado";
            break; 
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
});