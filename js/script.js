
const letter = document.querySelector(".letter__wrapper")

letter.addEventListener("mouseover", () => {
    letter.classList.add("flap")
})

letter.addEventListener("mouseleave", () => {
    letter.classList.remove("flap")
})

document.querySelector(".letter__text").addEventListener("click", () => {
    document.querySelector(".letter__overlay").classList.add("active")
})

document.querySelector(".letter__popup-close").addEventListener("click", () => {
    document.querySelector(".letter__overlay").classList.remove("active")
})

const updateClock = () => {
    var date = new Date()
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    document.querySelector(".footer__content-clock").innerHTML = time
    setTimeout(updateClock, 1000)
}
updateClock()