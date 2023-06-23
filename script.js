const startButton = document.querySelector(".start")
const stopButton = document.querySelector(".stop")
const resetButton = document.querySelector(".reset")
const secondNun = document.querySelector(".second")
const milisecondNun = document.querySelector(".milisecond")
const minuteNun = document.querySelector(".Minutes")

let cron

let millisecond = 0
let second = 0
let minute = 0

function start() {
    pause();
    cron = setInterval(() => {
        timer();
    }, 10);

}

function pause() {

    clearTimeout(cron);

}

function reset() {

    millisecond = 0
    second = 0
    minute = 0
    milisecondNun.innerHTML = "000"
    secondNun.innerHTML = "00"
    minuteNun.innerHTML = "00"


}

function timer() {

    if ((millisecond += 10) === 1000) {
        millisecond = 0
        second++
    }

    if (second === 60) {
        second = 0
        minute++
    }

    milisecondNun.innerHTML = millisecond
    secondNun.innerHTML = second
    minuteNun.innerHTML = minute
}