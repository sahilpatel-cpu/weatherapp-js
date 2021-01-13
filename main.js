
const api = {
    key: "2da2e04af6c680b1840514818c18aa4f", // "2da2e04af6c680b1840514818c18aa4f",
    /*api's (Application Programming Interface) are messengers that relay information back and forth between
     different applications and servers */

     /* also a set of functions that allows applications to access data and interact with
     external software components, operating systems, or microservices*/


    base: "https://api.openweathermap.org/data/2.5/"
    // openweatherapp to generate api key...baseurl is constant
}


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery); 
//set up eventListener to be used when key is pressed


function setQuery(evt) {
    if (evt.keyCode ==13) {  //13 is the return key to be pressed for evtlistener
        getResults(searchbox.value);
       // console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) //need back ticks for fetch request
    /*above runs a fetch request, uses api.base link, attatch weather, prase through query which is gotten from searchbox,
    set units to celcius, set APPID equal to api.key */ 
    .then(weather => {
        return weather.json(); //returns the weather and converts to json(JavaScript Object Notation)
        // json is used to send data from server to a web page

    }) .then(displayResults); //parses json through (displayResults)
}


function displayResults(weather) {  //creates function displayResults and passes weather as parameter
    //console.log(weather);
    let city = document.querySelector('.location .city'); //displays city according to user input
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`; //round to whole #

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${(weather.main.temp_min)}°c / ${(weather.main.temp_max)}°c`; //could do Math.round()

}
function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;  //returns template strings
    
/* Weather app in Vanilla Javascript, css and HTML without the use of any libraries.
Open Weather Map API used to make calls to a restful api to return the current 
weather data. This uses the Modern Javascript Fetch API.
*/
}