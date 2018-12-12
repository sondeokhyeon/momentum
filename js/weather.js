const weather = document.querySelector(".js-weather");
const API_KEY = "74a0b3f32d546079369952bfa7336d47";
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json()
    }).then(function (json) {
        const temperture = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperture} @ ${place}`
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj)
    getWeather(latitude, longitude)
}

function handleGeoError(position) {
    console.log("can acess get location")
}

function askForCoord() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoord = localStorage.getItem(COORDS);
    if (loadedCoord === null) {
        askForCoord();
    } else {
        const parseCoords = JSON.parse(loadedCoord)
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }
}

function init() {
    loadCoords()
}

init();