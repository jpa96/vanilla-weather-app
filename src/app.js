function showTodaysData(response) {

    let city = response.data.location.name;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = ` ${city}`;

    let temperature = response.data.current.temp_c;
    let temperatureElement = document.querySelector("#today-temperature");
    temperatureElement.innerHTML = `${temperature}°C`; 

    let condition = response.data.current.condition.text;
    let conditionElement = document.querySelector("#today-condition");
    conditionElement.innerHTML = condition;

    let feel = response.data.current.feelslike_c;
    let feelElement = document.querySelector("#feel");
    feelElement.innerHTML = ` ${feel}°C`;

    let highTemp = response.data.forecast.forecastday[0].day.maxtemp_c;
    let highTempElement = document.querySelector("#high-temp");
    highTempElement.innerHTML = `${highTemp}°C`

    let lowTemp = response.data.forecast.forecastday[0].day.mintemp_c;
    let lowTempElement = document.querySelector("#low-temp");
    lowTempElement.innerHTML = `${lowTemp}°C`

    let wind = Math.round(response.data.current.wind_kph);
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = ` ${wind} km/h`;
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

let city = "perth";
let apiKey = "b94fed5ef3a74832a4b112126221704";
let apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
//https://api.weatherapi.com/v1/forecast.json?key=b94fed5ef3a74832a4b112126221704&q=Perth&days=7&aqi=no&alerts=no

axios.get(apiUrl).then(showTodaysData);




