const title = document.getElementById('title')

const CLICK_CLASS = "clicked";

function btnEvent() {
    title.classList.toggle(CLICK_CLASS)
}

function init() {
    title.addEventListener('click', btnEvent)
}

init()