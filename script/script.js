function updateTimer() {
    let countdown = document.getElementById('countdown-function');
    const now = new Date().getTime();

    const launch = new Date('Jan 25, 2022 00:00:01')
    if (now > launch) {
        return countdown.innerHTML = '00:00:00:00';
    }

    const diferenceOfTheDay = launch - now
    days = Math.floor(diferenceOfTheDay / (1000 * 60 * 60 * 24))
    hours = Math.floor(diferenceOfTheDay / (1000 * 60 * 60))
    mins = Math.floor(diferenceOfTheDay / (1000 * 60))
    secs = Math.floor(diferenceOfTheDay / 1000)

    dias = formatTimer(days);
    horas = formatTimer(hours - days * 24)
    minutos = formatTimer(mins - hours * 60)
    segundos = formatTimer(secs - mins * 60)
    countdown.innerHTML = dias + ':' + horas + ':' + minutos + ':' + segundos;
}

function formatTimer(time) {
    return time.toString().length == 1 ? "0" + time : time;
}

setInterval('updateTimer()', 1000)
