function updateTimer() {
    let countdown = document.getElementById('countdown-function')
    const countDownDate = new Date('Jan 16, 2022 00:00:01')
    const now = new Date().getTime()
    const diferenceOfTheDay = countDownDate - now

    days = Math.floor(diferenceOfTheDay / (1000 * 60 * 60 * 24))
    hours = Math.floor(diferenceOfTheDay / (1000 * 60 * 60))
    mins = Math.floor(diferenceOfTheDay / (1000 * 60))
    secs = Math.floor(diferenceOfTheDay / 1000)

    d = days;
    h = hours - days * 24
    m = mins - hours * 60
    s = secs - mins * 60

    dias = formatTimer(d);
    horas = formatTimer(h);
    minutos = formatTimer(m);
    segundos = formatTimer(s);

    countdown.innerHTML =
        dias + ' : ' + horas + ' : ' + minutos + ' : ' + segundos
}

function formatTimer(time) {
    return time.toString().length == 1 ? "0" + time : time;
}

setInterval('updateTimer()', 1000)
