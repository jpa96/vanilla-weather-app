

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

function forecastDay(timestamp) {
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(timestamp);
    let day = days[date.getDay()];
    let formattedDate = `${day}`;
    return formattedDate;
}

function showTodaysData(response) {
    //DAILY FORECAST FOR 3 DAYS
    let dayOne = document.querySelector("#day-1");
    dayOne.innerHTML = forecastDay(response.data.forecast.forecastday[0].date);
    
    let dayTwo = document.querySelector("#day-2");
    dayTwo.innerHTML = forecastDay(response.data.forecast.forecastday[1].date);
    
    let dayThree = document.querySelector("#day-3");
    dayThree.innerHTML = forecastDay(response.data.forecast.forecastday[2].date);

    let dayOneCondition = document.querySelector("#day-1-prediction");
    dayOneCondition.innerHTML = response.data.forecast.forecastday[0].day.condition.text;

    let dayTwoCondition = document.querySelector("#day-2-prediction");
    dayTwoCondition.innerHTML = response.data.forecast.forecastday[1].day.condition.text;
    
    let dayThreeCondition = document.querySelector("#day-3-prediction");
    dayThreeCondition.innerHTML = response.data.forecast.forecastday[2].day.condition.text;
    
    let dayOneIcon = document.querySelector("#day-one-icon");
	dayOneIcon.setAttribute("src", `icons/${response.data.forecast.forecastday[0].day.condition.code}.png`);

    let dayTwoIcon = document.querySelector("#day-two-icon");
	dayTwoIcon.setAttribute("src", `icons/${response.data.forecast.forecastday[1].day.condition.code}.png`);

    let dayThreeIcon = document.querySelector("#day-three-icon");
	dayThreeIcon.setAttribute("src", `icons/${response.data.forecast.forecastday[2].day.condition.code}.png`);

    let dayOneTemp = document.querySelector("#temp-one");
    let dayOneTempData = Math.round(response.data.forecast.forecastday[0].day.avgtemp_c);
    dayOneTemp.innerHTML = `${dayOneTempData}°C`;

    let dayTwoTemp = document.querySelector("#temp-two");
    let dayTwoTempData = Math.round(response.data.forecast.forecastday[1].day.avgtemp_c);
    dayTwoTemp.innerHTML = `${dayTwoTempData}°C`;

    let dayThreeTemp = document.querySelector("#temp-three");
    let dayThreeTempData = Math.round(response.data.forecast.forecastday[2].day.avgtemp_c);
    dayThreeTemp.innerHTML = `${dayThreeTempData}°C`;

    let dayOneHigh = document.querySelector("#high-temp-one");
    let dayOneHighData = Math.round(response.data.forecast.forecastday[0].day.maxtemp_c);
    dayOneHigh.innerHTML = `${dayOneHighData}°C`;

    let dayTwoHigh = document.querySelector("#high-temp-two");
    let dayTwoHighData = Math.round(response.data.forecast.forecastday[1].day.maxtemp_c);
    dayTwoHigh.innerHTML = `${dayTwoHighData}°C`;

    let dayThreeHigh = document.querySelector("#high-temp-three");
    let dayThreeHighData = Math.round(response.data.forecast.forecastday[2].day.maxtemp_c);
    dayThreeHigh.innerHTML = `${dayThreeHighData}°C`;

    let dayOneLow = document.querySelector("#low-temp-one");
    let dayOneLowData = Math.round(response.data.forecast.forecastday[0].day.mintemp_c);
    dayOneLow.innerHTML = `${dayOneLowData}°C`;

    let dayTwoLow = document.querySelector("#low-temp-two");
    let dayTwoLowData = Math.round(response.data.forecast.forecastday[1].day.mintemp_c);
    dayTwoLow.innerHTML = `${dayTwoLowData}°C`;

    let dayThreeLow = document.querySelector("#low-temp-three");
    let dayThreeLowData = Math.round(response.data.forecast.forecastday[2].day.mintemp_c);
    dayThreeLow.innerHTML = `${dayThreeLowData}°C`;

    //MAIN WEATHER INFORMATION
    timeElement = document.querySelector("#current-time");
    timeElement.innerHTML = formatTime(response.data.location.localtime);
    
    dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.location.localtime_epoch * 1000);

    let city = response.data.location.name;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = ` ${city}`;

    celciusTemperature = Math.round(response.data.current.temp_c);

    let temperature = (celciusTemperature);
    let temperatureElement = document.querySelector("#today-temperature");
    temperatureElement.innerHTML = `${temperature}°C`; 

    let condition = response.data.current.condition.text;
    let conditionElement = document.querySelector("#today-condition");
    conditionElement.innerHTML = condition;

	let feel = Math.round(response.data.current.feelslike_c);
    let feelElement = document.querySelector("#feel");
    feelElement.innerHTML = ` ${feel}°C`;

    let sunrise = response.data.forecast.forecastday[0].astro.sunrise;
    let sunriseElement = document.querySelector("#sunrise");
    sunriseElement.innerHTML = `${sunrise}`;

    let sunset = response.data.forecast.forecastday[0].astro.sunset;
    let sunsetElement = document.querySelector("#sunset");
    sunsetElement.innerHTML = `${sunset}`;

    let moonrise = response.data.forecast.forecastday[0].astro.moonrise;
    let moonriseElement = document.querySelector("#moonrise");
    moonriseElement.innerHTML = `${moonrise}`;

    let moonset = response.data.forecast.forecastday[0].astro.moonset;
    let moonsetElement = document.querySelector("#moonset");
    moonsetElement.innerHTML = `${moonset}`;

    let humidity = response.data.current.humidity;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = ` ${humidity}%`;

    let highTemp = Math.round(response.data.forecast.forecastday[0].day.maxtemp_c);
    let highTempElement = document.querySelector("#high-temp");
    highTempElement.innerHTML = `${highTemp}°C`;

    let lowTemp = Math.round(response.data.forecast.forecastday[0].day.mintemp_c);
    let lowTempElement = document.querySelector("#low-temp");
    lowTempElement.innerHTML = `${lowTemp}°C`;

    let wind = Math.round(response.data.current.wind_kph);
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = ` ${wind} km/h`;
    
	let mainIcon = document.querySelector("#main-weather-icon");
	mainIcon.setAttribute("src", `icons/${response.data.current.condition.code}.png`);
	
	
	//hourly forecast starting from 05:00am

    let hourForecast = response.data.forecast.forecastday[0].hour;

    let hourElement = document.querySelector("#hourly-data");
      
    let hourHTML = "";
    
    hourForecast.forEach(function (hour) {
        console.log(hour.temp_c)
       
        hourHTML = hourHTML + `
        <div class="card" id="hour">
        <div class="the-hourly-prediction">${hour.condition.text}</div>
        <h2>${formatTime(hour.time)}</h2><div id="hour-five">${Math.round(hour.temp_c)}°C</div></div>
        `;
    });
    

    hourElement.innerHTML = hourHTML;
   
}

function search(city) {
    let apiKey = "900cc2ae081d424d98e125751222304";
    let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
//https://api.weatherapi.com/v1/forecast.json?key=900cc2ae081d424d98e125751222304&q=Texas&days=7&aqi=no&alerts=no

    axios.get(apiUrl).then(showTodaysData);
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

search("Texas");