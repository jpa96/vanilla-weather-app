

//WANT TO CHANGE OWN ICONS TO MATCH WEATHER CONDITION CODES OF API

function formatTime(timestamp) {
    //calculate time ***WANT TO MAKE THE WEATHER TO BE IN REAL-TIME
    let time = new Date(timestamp);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (hours < 10) {
      hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return `${hours}:${minutes}`;
}

function formatDate(timestamp) {
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "August", "September", "October", "November", "December"];
    //calculate date
    let date = new Date(timestamp);
    let day = days[date.getDay()];
    let currentDate = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    let formattedDate = `${day}, ${currentDate} ${month} ${year}`;
    return formattedDate;
}

function displayForecast(response) {

    let forecast = response.data.forecast;

    let forecastElement = document.querySelector("#daily-forecast");
    

    let forecastHTML = "";
    
    forecast.forEach(function(forecastDay) {
        forecastHTML = 
        forecastHTML + 
        `
    <div class="row daily-forecast" style="display: flex;">
    <div class="col-2 daily-forecast-col weekday" id="weekday">${forecastDay[0].date_epoch}</div>
    <div class="col-2 daily-forecast-col prediction" id="daily-prediction">Sunny</div>
    <div class="col-2 daily-forecast-col" id="weather-icon-col">
      <img src="icons/1252.png" alt="sun-png" class="weather-icon" id="sunny" style="width: 50px; "></div>
    <div class="col-2 daily-forecast-col" id="daily-average">28C</div>
    <div class="col-2 daily-forecast-col" id="daily-high">31C</div>
    <div class="col-2 daily-forecast-col" id="daily-low">12c</div>
    </div>
    `;
    })
    
    
    forecastElement.innerHTML = forecastHTML;

}

function showTodaysData(response) {

        	
    timeElement = document.querySelector("#current-time");
    timeElement.innerHTML = formatTime(response.data.location.localtime);
    
    dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.location.localtime_epoch * 1000);

    let city = response.data.location.name;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = ` ${city}`;

    celciusTemperature = response.data.current.temp_c;

    let temperature = (celciusTemperature);
    let temperatureElement = document.querySelector("#today-temperature");
    temperatureElement.innerHTML = `${temperature}°C`; 

    let condition = response.data.current.condition.text;
    let conditionElement = document.querySelector("#today-condition");
    conditionElement.innerHTML = condition;

	let feel = response.data.current.feelslike_c;
    let feelElement = document.querySelector("#feel");
    feelElement.innerHTML = ` ${feel}°C`;

    let sunrise = response.data.forecast.forecastday[0].astro.sunrise;
    let sunriseElement = document.querySelector("#sunrise");
    sunriseElement.innerHTML = ` ${sunrise}`;

    let sunset = response.data.forecast.forecastday[0].astro.sunset;
    let sunsetElement = document.querySelector("#sunset");
    sunsetElement.innerHTML = ` ${sunset}`;

    let moonrise = response.data.forecast.forecastday[0].astro.moonrise;
    let moonriseElement = document.querySelector("#moonrise");
    moonriseElement.innerHTML = ` ${moonrise}`;

    let moonset = response.data.forecast.forecastday[0].astro.moonset;
    let moonsetElement = document.querySelector("#moonset");
    moonsetElement.innerHTML = ` ${moonset}`;

    let humidity = response.data.current.humidity;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = ` ${humidity}%`;

    let highTemp = response.data.forecast.forecastday[0].day.maxtemp_c;
    let highTempElement = document.querySelector("#high-temp");
    highTempElement.innerHTML = `${highTemp}°C`;

    let lowTemp = response.data.forecast.forecastday[0].day.mintemp_c;
    let lowTempElement = document.querySelector("#low-temp");
    lowTempElement.innerHTML = `${lowTemp}°C`;

    let wind = Math.round(response.data.current.wind_kph);
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = ` ${wind} km/h`;
    
	let mainIcon = document.querySelector("#main-weather-icon");
	mainIcon.setAttribute("src", `icons/${response.data.current.condition.code}.png`);
	
	
	//hourly forecast starting from 05:00am
    let hour5Temp = response.data.forecast.forecastday[0].hour[5].temp_c;
    let hour5Element = document.querySelector("#hour-five");
    hour5Element.innerHTML = `${hour5Temp}°C`;

    let hour6Temp = response.data.forecast.forecastday[0].hour[6].temp_c;
    let hour6Element = document.querySelector("#hour-six");
    hour6Element.innerHTML = `${hour6Temp}°C`;

    let hour7Temp = response.data.forecast.forecastday[0].hour[7].temp_c;
    let hour7Element = document.querySelector("#hour-seven");
    hour7Element.innerHTML = `${hour7Temp}°C`;

    let hour8Temp = response.data.forecast.forecastday[0].hour[8].temp_c;
    let hour8Element = document.querySelector("#hour-eight");
    hour8Element.innerHTML = `${hour8Temp}°C`;

    let hour9Temp = response.data.forecast.forecastday[0].hour[9].temp_c;
    let hour9Element = document.querySelector("#hour-nine");
    hour9Element.innerHTML = `${hour9Temp}°C`;

    let hour10Temp = response.data.forecast.forecastday[0].hour[10].temp_c;
    let hour10Element = document.querySelector("#hour-ten");
    hour10Element.innerHTML = `${hour10Temp}°C`;

    let hour11Temp = response.data.forecast.forecastday[0].hour[11].temp_c;
    let hour11Element = document.querySelector("#hour-eleven");
    hour11Element.innerHTML = `${hour11Temp}°C`;

    let hour12Temp = response.data.forecast.forecastday[0].hour[12].temp_c;
    let hour12Element = document.querySelector("#hour-twelve");
    hour12Element.innerHTML = `${hour12Temp}°C`;

    let hour13Temp = response.data.forecast.forecastday[0].hour[13].temp_c;
    let hour13Element = document.querySelector("#hour-thirteen");
    hour13Element.innerHTML = `${hour13Temp}°C`;

    let hour14Temp = response.data.forecast.forecastday[0].hour[14].temp_c;
    let hour14Element = document.querySelector("#hour-fourteen");
    hour14Element.innerHTML = `${hour14Temp}°C`;

    let hour15Temp = response.data.forecast.forecastday[0].hour[15].temp_c;
    let hour15Element = document.querySelector("#hour-fifteen");
    hour15Element.innerHTML = `${hour15Temp}°C`;

    let hour16Temp = response.data.forecast.forecastday[0].hour[16].temp_c;
    let hour16Element = document.querySelector("#hour-sixteen");
    hour16Element.innerHTML = `${hour16Temp}°C`;

    let hour17Temp = response.data.forecast.forecastday[0].hour[17].temp_c;
    let hour17Element = document.querySelector("#hour-seventeen");
    hour17Element.innerHTML = `${hour17Temp}°C`;

    let hour18Temp = response.data.forecast.forecastday[0].hour[18].temp_c;
    let hour18Element = document.querySelector("#hour-eighteen");
    hour18Element.innerHTML = `${hour18Temp}°C`;

    let hour19Temp = response.data.forecast.forecastday[0].hour[19].temp_c;
    let hour19Element = document.querySelector("#hour-nineteen");
    hour19Element.innerHTML = `${hour19Temp}°C`;

    let hour20Temp = response.data.forecast.forecastday[0].hour[20].temp_c;
    let hour20Element = document.querySelector("#hour-twenty");
    hour20Element.innerHTML = `${hour20Temp}°C`;

    let hour21Temp = response.data.forecast.forecastday[0].hour[21].temp_c;
    let hour21Element = document.querySelector("#hour-twentyone");
    hour21Element.innerHTML = `${hour21Temp}°C`;

    let hour22Temp = response.data.forecast.forecastday[0].hour[22].temp_c;
    let hour22Element = document.querySelector("#hour-twentytwo");
    hour22Element.innerHTML = `${hour22Temp}°C`;

    let hour23Temp = response.data.forecast.forecastday[0].hour[23].temp_c;
    let hour23Element = document.querySelector("#hour-twentythree");
    hour23Element.innerHTML = `${hour23Temp}°C`;

    let hour0Temp = response.data.forecast.forecastday[0].hour[0].temp_c;
    let hour0Element = document.querySelector("#hour-zero");
    hour0Element.innerHTML = `${hour0Temp}°C`;

    let hour1Temp = response.data.forecast.forecastday[0].hour[1].temp_c;
    let hour1Element = document.querySelector("#hour-one");
    hour1Element.innerHTML = `${hour1Temp}°C`;

    let hour2Temp = response.data.forecast.forecastday[0].hour[2].temp_c;
    let hour2Element = document.querySelector("#hour-two");
    hour2Element.innerHTML = `${hour2Temp}°C`;

    let hour3Temp = response.data.forecast.forecastday[0].hour[3].temp_c;
    let hour3Element = document.querySelector("#hour-three");
    hour3Element.innerHTML = `${hour3Temp}°C`;

    let hour4Temp = response.data.forecast.forecastday[0].hour[4].temp_c;
    let hour4Element = document.querySelector("#hour-four");
    hour4Element.innerHTML = `${hour4Temp}°C`;
    
    getForecast(response.data.forecast);

}

function search(city) {
    let apiKey = "900cc2ae081d424d98e125751222304";
    let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
//https://api.weatherapi.com/v1/forecast.json?key=900cc2ae081d424d98e125751222304&q=Perth&days=7&aqi=no&alerts=no

    axios.get(apiUrl).then(showTodaysData);
}

function getForecast(city) {
    let apiKey = "900cc2ae081d424d98e125751222304";
    let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
//https://api.weatherapi.com/v1/forecast.json?key=900cc2ae081d424d98e125751222304&q=Perth&days=7&aqi=no&alerts=no

    axios.get(apiUrl).then(displayForecast);
}

function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    //console.log(searchInput.value);
    search(searchInput.value);
}

function convertUnitF() {
    
    let mainTemperature = document.querySelector("#today-temperature");
    fahrenheitTemperature = Math.round(celciusTemperature * 9 / 5) + 32;
    mainTemperature.innerHTML = `${fahrenheitTemperature}°F`;
    }
    
function convertUnitC(){

    let mainTemperature = document.querySelector("#today-temperature");
    mainTemperature.innerHTML = `${celciusTemperature}°C`;

}


let toggleFahrenheit = document.querySelector("#fahrenheit-label");
toggleFahrenheit.addEventListener("click", convertUnitF);

let celciusTemperature = null;


let toggleCelcius = document.querySelector("#celcius-label");
toggleCelcius.addEventListener("click", convertUnitC);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Barcelona");

