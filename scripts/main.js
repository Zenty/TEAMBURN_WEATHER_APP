// Weather API

//weatherobject
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

//constructor to create a weatherobject
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

forecast = {
  dt: 1730970000,
  main: {
    temp: 280.79,
    feels_like: 279.93,
    temp_min: 280.79,
    temp_max: 281.31,
    pressure: 1031,
    sea_level: 1031,
    grnd_level: 1021,
    humidity: 88,
    temp_kf: -0.52
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d"
    }
  ],
  clouds: {
    all: 52
  },
  wind: {
    speed: 1.66,
    deg: 331,
    gust: 3.21
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2024-11-07 09:00:00"
}

//constructor to create a weatherobject
function Forecast(Dt, Main, Weather, Clouds, Wind, Visibility, Pop, Sys, Dt_txt) {
  this.dt = Dt
  this.main = Main,
    this.weather = Weather,
    this.clouds = Clouds,
    this.wind = Wind,
    this.visibility = Visibility,
    this.pop = Pop,
    this.sys = Sys,
    this.dt_txt = Dt_txt
};

//function to create a weatherobject from the openweathermap API. Takes a cityname to fetch correct data for the city.
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

//function that fetches data from forecast API and places it in the corresponding boxes in section 4, uses the same input as chosenCityWeather-function
function getForecastData(cityname) {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=df4c0154d893ba9c3ae1e611a27a169b&units=metric`)
    .then(response => response.json())
    .then(forecastData => {
      for( let i=0; i < 16; i++)
        {
          document.getElementById(`item_${i + 1}_date`).innerText = forecastData.list[i].dt_txt;
          document.getElementById(`item_${i + 1}_weather`).innerText = forecastData.list[i].weather[0].main;
          document.getElementById(`item_${i + 1}_temperature`).innerText = forecastData.list[i].main.temp + " C°";
          iconSwitch(`item_${i + 1}_icon`, forecastData.list[i].weather[0].icon);
          forecastBackgroundSwitch(`section_4_item_${i + 1}`, forecastData.list[i].weather[0].icon);
        }
    })
    .catch(error => console.error("error fetching forecast data:", error));
}

//function that takes id of the element we want to print the icon to aswell as loads the icon from the weatherobject.
function iconSwitch(id, icon) {
  switch (icon) {
    case "01d":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/01d@2x.png\" alt=\"sunny icon\">";
      break;
    case "02d":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/02d@2x.png\" alt=\"sunny icon\">";
      break;
    case "03d":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/03d@2x.png\" alt=\"sunny icon\">";
      break;
    case "04d":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/04d@2x.png\" alt=\"sunny icon\">";
      break;
    case "09d":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/09d@2x.png\" alt=\"sunny icon\">";
      break;
    case "10d":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/10d@2x.png\" alt=\"sunny icon\">";
      break;
    case "11d":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/11d@2x.png\" alt=\"sunny icon\">";
      break;
    case "13d":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/13d@2x.png\" alt=\"sunny icon\">";
      break;
    case "50d":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/50d@2x.png\" alt=\"sunny icon\">";
      break;
    case "01n":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/01n@2x.png\" alt=\"sunny icon\">";
      break;
    case "02n":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/02n@2x.png\" alt=\"sunny icon\">";
      break;
    case "03n":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/03n@2x.png\" alt=\"sunny icon\">";
      break;
    case "04n":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/04n@2x.png\" alt=\"sunny icon\">";
      break;
    case "09n":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/09n@2x.png\" alt=\"sunny icon\">";
      break;
    case "10n":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/10n@2x.png\" alt=\"sunny icon\">";
      break;
    case "11n":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/11n@2x.png\" alt=\"sunny icon\">";
      break;
    case "13n":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/13n@2x.png\" alt=\"sunny icon\">";
      break;
    case "50n":
      document.getElementById(id).innerHTML = "<img src=\"https://openweathermap.org/img/wn/50n@2x.png\" alt=\"sunny icon\">";
      break;
    default:
      document.getElementById(id).innerText = icon;
      break;
  }
}

function forecastBackgroundSwitch(id, icontxt){
    switch (icontxt) {
      case "01d":
        document.getElementById(id).style.backgroundImage = "url('../images/sunnyclearsky.jpg')";
        break;
      case "02d":
        document.getElementById(id).style.backgroundImage = "url('../images/cloudysun.jpg')";
        break;
      case "03d":
        document.getElementById(id).style.backgroundImage = "url('../images/scatteredclouds.avif')";
        break;
      case "04d":
        document.getElementById(id).style.backgroundImage = "url('../images/brokenclouds.jpg')"
        break;
      case "09d":
        document.getElementById(id).style.backgroundImage = "url('../images/showerrain.jpg')"
        break;
      case "10d":
        document.getElementById(id).style.backgroundImage = "url('../images/rain.jpg')"
        break;
      case "11d":
        document.getElementById(id).style.backgroundImage = "url('../images/thunderstorm.webp')"
        break;
      case "13d":
        document.getElementById(id).style.backgroundImage = "url('../images/snow.jpg')"
        break;
      case "50d":
        document.getElementById(id).style.backgroundImage = "url('../images/mist.jpg')"
        break;
      case "01n":
        document.getElementById(id).style.backgroundImage = "url('../images/clearskynight.webp')"
        break;
      case "02n":
        document.getElementById(id).style.backgroundImage = "url('../images/fewcloudsnight.jpg')"
        break;
      case "03n":
        document.getElementById(id).style.backgroundImage = "url('../images/scatteredcloudsnight.jpg')"
        break;
      case "04n":
        document.getElementById(id).style.backgroundImage = "url('../images/brokencloudsnight.jpg')"
        break;
      case "09n":
        document.getElementById(id).style.backgroundImage = "url('../images/showerrainnight.jpg')"
        break;
      case "10n":
        document.getElementById(id).style.backgroundImage = "url('../images/showerrainnight.jpg')"
        break;
      case "11n":
        document.getElementById(id).style.backgroundImage = "url('../images/thunderstormnight.jpg')"
        break;
      case "13n":
        document.getElementById(id).style.backgroundImage = "url('../images/snownight.jpg')"
        break;
      case "50n":
        document.getElementById(id).style.backgroundImage = "url('../images/mistnight.jpg')"
        break;
      default:
        document.getElementById(id).innerText = icon;
        break;
    }
  }

//function to set the weather in the rwanda-part of the comparison. Creates a weatherobject throug the getCurrentWeatherData-method and 
//then sets the data to correct id's
function rwandaCityWeather(cityRwanda) {

  getCurrentWeatherData(cityRwanda).then(newWeather => {
    document.getElementById("rwanda_city_weather").innerText = newWeather.weather[0].description;
    document.getElementById("rwanda_city_temperature").innerText = innerText = newWeather.main.temp;
    document.getElementById("rwanda_city_sunrise").innerText = convertUnixToDateTime(newWeather.sys.sunrise);
    document.getElementById("rwanda_city_sunset").innerText = convertUnixToDateTime(newWeather.sys.sunset);
    iconSwitch("rwanda_icon", newWeather.weather[0].icon);
  })
}

//function to set the weather in the sweden-part of the comparison. Creates a weatherobject throug the getCurrentWeatherData-method and 
//then sets the data to correct id's
function swedenCityWeather(citySweden) {
  getCurrentWeatherData(citySweden).then(newWeather => {
    document.getElementById("sweden_city_weather").innerText = newWeather.weather[0].description;
    document.getElementById("sweden_city_temperature").innerText = innerText = newWeather.main.temp;
    document.getElementById("sweden_city_sunrise").innerText = convertUnixToDateTime(newWeather.sys.sunrise);
    document.getElementById("sweden_city_sunset").innerText = convertUnixToDateTime(newWeather.sys.sunset);
    iconSwitch("sweden_icon", newWeather.weather[0].icon);
  })
}


//function to set the data in free-search part of the weather app, in section 3. Creates a weatherobject throug the getCurrentWeatherData-method and 
//then sets the data to correct id's
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

//functiont that converts unix to datetime for increased readability
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



