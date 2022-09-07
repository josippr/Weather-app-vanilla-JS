var d = new Date();
var n = d.toLocaleDateString();
document.getElementById("date").innerHTML = n;

function getWeather(cityID) {
    var key = '4013e3ad32e3c9eda6b77847229add9e';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            drawWeather(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function getCentar(cityID) {
    var key = '4013e3ad32e3c9eda6b77847229add9e';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            drawWeatherCentar(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function getSTZP(cityID) {
    var key = '4013e3ad32e3c9eda6b77847229add9e';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            drawWeatherST(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function getVG(cityID) {
    var key = '4013e3ad32e3c9eda6b77847229add9e';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            drawWeatherVG(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function getMU(cityID) {
    var key = '4013e3ad32e3c9eda6b77847229add9e';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            drawWeatherMU(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function getGL(cityID) {
    var key = '4013e3ad32e3c9eda6b77847229add9e';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            drawWeatherGL(data);
        })
        .catch(function() {
            // catch any errors
        });
}

window.onload = function() {
    //Zagreb city id, can be seen in address bar when searching for the city on https://openweathermap.org/find
    getWeather(3186886);
    getCentar(6618983);

    getVG(3188244);
    getSTZP(3189713);
    getMU(3194643);
    getVD(3187489);
    getGL(3193420);

    //centar: 6618983
    //grad zagreb, HR: 3337532
    //Velika Gorica: 3188244
    //Strmec: 3189713
    //Murter: 3194643
    //Vodice: 3187489
    //Glina: 3200600
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    // document.getElementById('cityName').innerHTML = d.name;
    document.getElementById('description').innerHTML = 'Sky: ' + d.weather[0].description;
    document.getElementById('temp').innerHTML = 'Temperature: ' + celcius + '&deg;C';
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + d.weather[0].icon + ".png"
}

function drawWeatherCentar(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    // document.getElementById('cityName-cn').innerHTML = d.name;
    document.getElementById('description-cn').innerHTML = 'Sky: ' + d.weather[0].description;
    document.getElementById('temp-cn').innerHTML = 'Temperature: ' + celcius + '&deg;C';
    document.getElementById('icon-cn').src = "http://openweathermap.org/img/w/" + d.weather[0].icon + ".png"
}

function drawWeatherST(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    // document.getElementById('cityName-vg').innerHTML = d.name;
    document.getElementById('description-zpr').innerHTML = 'Sky: ' + d.weather[0].description;
    document.getElementById('temp-zpr').innerHTML = 'Temperature: ' + celcius + '&deg;C';
    document.getElementById('icon-zpr').src = "http://openweathermap.org/img/w/" + d.weather[0].icon + ".png"
}

function drawWeatherVG(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    // document.getElementById('cityName-vg').innerHTML = d.name;
    document.getElementById('description-vg').innerHTML = 'Sky: ' + d.weather[0].description;
    document.getElementById('temp-vg').innerHTML = 'Temperature: ' + celcius + '&deg;C';
    document.getElementById('icon-vg').src = "http://openweathermap.org/img/w/" + d.weather[0].icon + ".png"
}

function drawWeatherMU(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    // document.getElementById('cityName-vg').innerHTML = d.name;
    document.getElementById('description-mu').innerHTML = 'Sky: ' + d.weather[0].description;
    document.getElementById('temp-mu').innerHTML = 'Temperature: ' + celcius + '&deg;C';
    document.getElementById('icon-mu').src = "http://openweathermap.org/img/w/" + d.weather[0].icon + ".png"
}

function drawWeatherGL(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    // document.getElementById('cityName-gl').innerHTML = d.name;
    document.getElementById('description-gl').innerHTML = 'Sky: ' + d.weather[0].description;
    document.getElementById('temp-gl').innerHTML = 'Temperature: ' + celcius + '&deg;C';
    document.getElementById('icon-gl').src = "http://openweathermap.org/img/w/" + d.weather[0].icon + ".png"
}