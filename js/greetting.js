const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    btn = document.querySelector(".btn");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function currentUserNameReset() {
    localStorage.removeItem(USER_LS)
    window.location.reload()
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSumit(event) {
    event.preventDefault()
    const currentValue = input.value;
    paintGreeting(currentValue)
    saveName(currentValue)
}

function askForName() {
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit", handleSumit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN)
    btn.classList.add(SHOWING_CN)
    btn.addEventListener('click', currentUserNameReset)
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text} `
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null) {
        askForName()
    } else {
        paintGreeting(currentUser)
    }

}

function init() {
    loadName();
}

init();

