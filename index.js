const hourEL = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEL = document.getElementById("ampm")

const updateClock = () => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h + m + s > 12) {
        ampm = "PM"
    }

    if (h > 12) {
        h = h - 12;
    }


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEL.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEL.innerText = ampm;
    setTimeout(() => { updateClock() }, 1000)
}

updateClock()