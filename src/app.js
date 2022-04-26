

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