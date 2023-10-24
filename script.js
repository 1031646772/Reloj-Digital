function calcular_tiempo(){
    let tiempo= new Date()
    let hora=tiempo.getHours();
    let minutos=tiempo.getMinutes();
    let segundos=tiempo.getSeconds();
    hora=hora<10 ? "0" + hora : hora;
    minutos=minutos<10 ? "0" + minutos : minutos;
    segundos=segundos<10 ? "0" + segundos : segundos;
    am=hora>12;
    if (hora>=13) {
        hora=hora-12
    } else {
        hora=hora
    }
    if (am===true) {
        am="PM"
    }else 
    {
       am="AM";
    }
    let PantallaReloj= hora+":"+minutos+":"+segundos+" "+am;
    let relojDigital=document.querySelector(".reloj");
    relojDigital.innerHTML=PantallaReloj;
}

setInterval(calcular_tiempo, 1000);
