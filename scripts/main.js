

weather = {
  coord: {
    lon: 0,
    lat: 0
  },
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: ""
    }
  ],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0
  },
  clouds: {
    all: 0
  },
  dt: 0,
  sys: {
    sunrise: 0,
    sunset: 0
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0
};

function Weather(Coord, Weather, Base, Main, Visibility, Wind, Clouds, Dt, Sys, Timezone, Id, Name, Cod) {
  this.coord = Coord
  this.weather = Weather,
    this.base = Base,
    this.main = Main,
    this.visibility = Visibility,
    this.wind = Wind,
    this.clouds = Clouds,
    this.dt = Dt,
    this.sys = Sys,
    this.timezone = Timezone,
    this.id = Id,
    this.name = Name,
    this.cod = Cod
};

function getCurrentWeatherData(cityname) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=df4c0154d893ba9c3ae1e611a27a169b&units=metric`)
    .then(response => response.json())
    .then(weatherData => {
      return new Weather(
        weatherData.coord,
        weatherData.weather,
        weatherData.base,
        weatherData.main,
        weatherData.visibility,
        weatherData.wind,
        weatherData.clouds,
        weatherData.dt,
        weatherData.sys,
        weatherData.timezone,
        weatherData.id,
        weatherData.name,
        weatherData.cod,
      )
    })

}

function rwandaCityWeather(cityRwanda) {

  getCurrentWeatherData(cityRwanda).then(newWeather => {
    document.getElementById("rwanda_city_weather").innerText = newWeather.weather[0].description;
    document.getElementById("rwanda_city_temperature").innerText = innerText = newWeather.main.temp;
    document.getElementById("rwanda_city_sunrise").innerText = convertUnixToDateTime(newWeather.sys.sunrise);
    document.getElementById("rwanda_city_sunset").innerText = convertUnixToDateTime(newWeather.sys.sunset);
  })
}

function swedenCityWeather(citySweden) {
    getCurrentWeatherData(citySweden).then(newWeather => {
      document.getElementById("sweden_city_weather").innerText = newWeather.weather[0].description;
      document.getElementById("sweden_city_temperature").innerText = innerText = newWeather.main.temp;
      document.getElementById("sweden_city_sunrise").innerText = convertUnixToDateTime(newWeather.sys.sunrise);
      document.getElementById("sweden_city_sunset").innerText = convertUnixToDateTime(newWeather.sys.sunset);
    })
  }


function chosenCityWeather(cityname) {
  getCurrentWeatherData(cityname).then(newWeather => {
    document.getElementById("chosen_city_weather").innerText = newWeather.weather[0].description;
    document.getElementById("chosen_city_temperature").innerText = newWeather.main.temp;
    document.getElementById("chosen_city_temperature_feels_like").innerText = newWeather.main.feels_like;
    document.getElementById("chosen_city_min_temperature").innerText = newWeather.main.temp_min;
    document.getElementById("chosen_city_max_temperature").innerText = newWeather.main.temp_max;
    document.getElementById("chosen_city_sunrise").innerText = convertUnixToDateTime(newWeather.sys.sunrise);
    document.getElementById("chosen_city_sunset").innerText = convertUnixToDateTime(newWeather.sys.sunset);
  })
    ;
}

function convertUnixToDateTime(unixTime) {
  const dateObject = new Date(unixTime * 1000);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const day = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}



