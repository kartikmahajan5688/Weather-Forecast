const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "9d34cae12amshe7685a80480eee8p118279jsn58d40a7d6cee",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};

// Function for Searching Any City Weather 
const getWeather = (city) => {
        cityName.innerHTML = city;
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= "+ city,
        options
        )
        .then((response) => response.json())
    .then((response) => {
        console.log(response);

        feels_like.innerHTML = response.feels_like;
        // cloud_pct.innerHTML = response.cloud_pct;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        max_temp.innerHTML = response.max_temp;
        min_temp.innerHTML = response.min_temp;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        wind_degrees.innerHTML = response.wind_degrees;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
    
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const strRe = "^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$";
    if (city.value != '' && isNaN(city.value) && city.value.match(strRe))
    {
        getWeather(city.value)
    }
    city.value = '';
});

getWeather("Delhi");


//Fetching Gurgaon Weather

const getWeatherGurgaon = () => {
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gurgaon",
        options
        )
        .then((response) => response.json())
    .then((response) => {
        console.log(response);

        ggn_feels_like.innerHTML = response.feels_like;
        ggn_cloud_pct.innerHTML = response.cloud_pct;
        ggn_humidity.innerHTML = response.humidity;
        ggn_max_temp.innerHTML = response.max_temp;
        ggn_min_temp.innerHTML = response.min_temp;
        ggn_sunrise.innerHTML = response.sunrise;
        ggn_sunset.innerHTML = response.sunset;
        ggn_temp.innerHTML = response.temp;
        ggn_wind_degrees.innerHTML = response.wind_degrees;
        ggn_wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
    
}

getWeatherGurgaon();


//Fetching Pune Weather
const getWeatherPune = () => {
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune",
        options
        )
        .then((response) => response.json())
    .then((response) => {
        console.log(response);

        pune_feels_like.innerHTML = response.feels_like;
        pune_cloud_pct.innerHTML = response.cloud_pct;
        pune_humidity.innerHTML = response.humidity;
        pune_max_temp.innerHTML = response.max_temp;
        pune_min_temp.innerHTML = response.min_temp;
        pune_sunrise.innerHTML = response.sunrise;
        pune_sunset.innerHTML = response.sunset;
        pune_temp.innerHTML = response.temp;
        pune_wind_degrees.innerHTML = response.wind_degrees;
        pune_wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
    
}

getWeatherPune();

//Fetching Bangalore Weather
const getWeatherBangalore = () => {
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
        options
        )
        .then((response) => response.json())
    .then((response) => {
        console.log(response);

        bang_feels_like.innerHTML = response.feels_like;
        bang_cloud_pct.innerHTML = response.cloud_pct;
        bang_humidity.innerHTML = response.humidity;
        bang_max_temp.innerHTML = response.max_temp;
        bang_min_temp.innerHTML = response.min_temp;
        bang_sunrise.innerHTML = response.sunrise;
        bang_sunset.innerHTML = response.sunset;
        bang_temp.innerHTML = response.temp;
        bang_wind_degrees.innerHTML = response.wind_degrees;
        bang_wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
    
}

getWeatherBangalore();