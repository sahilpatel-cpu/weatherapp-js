# weatherapp-js
Weather app developed in vanilla JavaScript, HTML, and CSS
No use of libraries neccesary
Open Weather Map API to make calls to a restful api (which returns the current weather data)
This uses the Modern Javascript Fetch API

https://openweathermap.org/api 
^link above used to generate as many api's needed as per free subscription
eventListener added for searchbox

In main.js, the function getResults runs a fetch request, uses api.base link provided, attaches weather, parses through query which is gotten from searchbox,
set units to celcius, sets APPID equal to api.key. Later, the function also returns the weather and converts to json(JavaScript Object Notation), 
which is then parsed through DisplayResults

index.html simply sets up the webpage
main.css is all borders, margins, and display

still working on making background change according to the current weather inputted by user in searchbox
