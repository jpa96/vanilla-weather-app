function showTemperature(response) {
    let temperature = response.data.current.temp_c;
    let temperatureElement = document.querySelector("#today-temperature");
    temperatureElement.innerHTML = `${temperature}°C`; 

    

    let city = response.data.location.name;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = ` ${city}`;

    let condition = response.data.current.condition.text;
    let conditionElement = document.querySelector("#today-condition");
    conditionElement.innerHTML = condition;
}

let apiKey = "b94fed5ef3a74832a4b112126221704";
let apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=b94fed5ef3a74832a4b112126221704&q=Perth&days=6&aqi=no&alerts=no";

axios.get(apiUrl).then(showTemperature);

