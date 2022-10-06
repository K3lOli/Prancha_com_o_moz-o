function contador() {
    const appendDias = document.getElementById('dias');
    const appendHoras = document.getElementById('horas');
    const appendMinutos = document.getElementById('minutos');
    const appendSegundos = document.getElementById('segundos');

    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;
    var miliseconds = document.getElementById("miliseconds").value;

    var mostrador = document.getElementById('mostrador');
    var timer = document.getElementById('timer');
    var preencha = document.getElementById('preencha')

    var stop = document.getElementById('stop');

    stop.addEventListener('click', () => {
        clearInterval(Interval)
        mostrador.classList.remove('visibility');
        timer.classList.remove('visibility');
        dias = 0
        horas = 0
        minutos = 0
        segundos = 0


    })


    mostrador.classList.add('visibility');
    timer.classList.add('visibility');







    var Interval;



    var dias = parseFloat(hours);
    var horas = parseFloat(minutes);
    var minutos = parseFloat(seconds);
    var segundos = parseFloat(miliseconds);

    console.log(dias);

    Interval = setInterval(startTimer, 16.6666666666666666)



    function startTimer() {
        appendSegundos.innerHTML = segundos;
        appendMinutos.innerHTML = minutos;
        appendHoras.innerHTML = horas;
        appendDias.innerHTML = dias;

        if (isNaN(dias)) {
            appendDias.innerHTML = 0
            dias = 0;
        }

        if (isNaN(horas)) {
            appendHoras.innerHTML = 0
            horas = 0;
        }

        if (isNaN(minutos)) {
            appendMinutos.innerHTML = 0
            minutos = 0;
        }

        if (isNaN(segundos)) {
            appendSegundos.innerHTML = 0
            segundos = 0;
        }

        if (segundos == 0 && minutos == 0 && horas == 0 && dias == horas) {
            clearInterval(Interval)
            dias = 0
            horas = 0
            minutos = 0
            segundos = 0
            preencha.classList.add('visibility');
            mostrador.classList.toggle('visibility');
            timer.classList.toggle('visibility');
        }
        else {
            preencha.classList.remove('visibility');
        }

        if (horas == 0 && dias > 0) {
            horas = 60;
            dias--;
            appendDias.innerHTML = dias;
        }

        if (minutos == 0 && horas > 0) {
            minutos = 60
            horas--;
            appendMinutos.innerHTML = horas;
        }


        if (segundos == 00) {
            segundos = 60;
            minutos--;
            appendSegundos.innerHTML = "00"
        }

        segundos--;



        if (segundos <= 9) {
            appendSegundos.innerHTML = "0" + segundos;
        }



        if (minutos <= 9) {
            appendMinutos.innerHTML = "0" + minutos;
        }

        if (horas <= 9) {
            appendHoras.innerHTML = "0" + horas;
        }

        if (dias <= 9) {
            appendDias.innerHTML = "0" + dias;
        }


        if (segundos == 0 && minutos == 0 && horas == 0 && dias == horas) {
            clearInterval(Interval)
        }
    }


}
