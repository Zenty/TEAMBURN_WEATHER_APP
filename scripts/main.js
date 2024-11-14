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
    .catch(error => console.error("error fetching weather data:", error));
}

//function that fetches data from forecast API and places it in the corresponding boxes in section 4, uses the same input as chosenCityWeather-function
function getForecastData(cityname) {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=df4c0154d893ba9c3ae1e611a27a169b&units=metric`)
    .then(response => response.json())
    .then(forecastData => {
      for( let i=0; i < 16; i++)
        {
          document.getElementsByClassName("section_4_nocity")[0].style.display = "none";
          document.getElementsByClassName("section_4_container")[0].style.display = "flex";
          document.getElementsByClassName("section_3_nocity")[0].style.display = "none";
          document.getElementsByClassName("section_3_container")[0].style.display = "flex";
          document.getElementsByClassName("section_3_wrapper")[0].style.background = "var(--secondary-background-gradient)";
          document.getElementById(`item_${i + 1}_city`).innerText = cityname;
          document.getElementById(`item_${i + 1}_date`).innerText = forecastData.list[i].dt_txt;
          document.getElementById(`item_${i + 1}_weather`).innerText = forecastData.list[i].weather[0].main;
          document.getElementById(`item_${i + 1}_temperature`).innerText = Math.round(forecastData.list[i].main.temp) + "°";
          document.getElementById(`item_${i + 1}_icon`).innerHTML = `<img src=\"https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}@2x.png\" alt=\"sunny icon\">`;
          forecastBackgroundSwitch(`section_4_item_${i + 1}`, forecastData.list[i].weather[0].icon);
        }
    })
    .catch(error => console.error("error fetching forecast data:", error));
}

function forecastBackgroundSwitch(id, icontxt){
    switch (icontxt) {
      case "01d":
        document.getElementById(id).style.backgroundImage = "url('images/sunnyclearsky.jpg')";
        break;
      case "02d":
        document.getElementById(id).style.backgroundImage = "url('images/cloudysun.jpg')";
        break;
      case "03d":
        document.getElementById(id).style.backgroundImage = "url('images/scatteredclouds.avif')";
        break;
      case "04d":
        document.getElementById(id).style.backgroundImage = "url('images/brokenclouds.jpg')";
        break;
      case "09d":
        document.getElementById(id).style.backgroundImage = "url('images/showerrain.jpg')";
        break;
      case "10d":
        document.getElementById(id).style.backgroundImage = "url('images/rain.jpg')";
        break;
      case "11d":
        document.getElementById(id).style.backgroundImage = "url('images/thunderstorm.webp')";
        break;
      case "13d":
        document.getElementById(id).style.backgroundImage = "url('images/snow.jpg')";
        break;
      case "50d":
        document.getElementById(id).style.backgroundImage = "url('images/mist.jpg')";
        break;
      case "01n":
        document.getElementById(id).style.backgroundImage = "url('images/clearskynight.webp')";
        break;
      case "02n":
        document.getElementById(id).style.backgroundImage = "url('images/fewcloudsnight.jpg')";
        break;
      case "03n":
        document.getElementById(id).style.backgroundImage = "url('images/scatteredcloudsnight.jpg')";
        break;
      case "04n":
        document.getElementById(id).style.backgroundImage = "url('images/brokencloudsnight.jpg')";
        break;
      case "09n":
        document.getElementById(id).style.backgroundImage = "url('images/showerrainnight.jpg')";
        break;
      case "10n":
        document.getElementById(id).style.backgroundImage = "url('images/showerrainnight.jpg')";
        break;
      case "11n":
        document.getElementById(id).style.backgroundImage = "url('images/thunderstormnight.jpg')";
        break;
      case "13n":
        document.getElementById(id).style.backgroundImage = "url('images/snownight.jpg')";
        break;
      case "50n":
        document.getElementById(id).style.backgroundImage = "url('images/mistnight.jpg')";
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
    document.getElementById("rwanda_city_weather").innerText = capitalize(newWeather.weather[0].description);
    document.getElementById("rwanda_city_temperature").innerText = innerText = newWeather.main.temp;
    document.getElementById("rwanda_city_sunrise").innerText = convertUnixToDateTime(newWeather.sys.sunrise);
    document.getElementById("rwanda_city_sunset").innerText = convertUnixToDateTime(newWeather.sys.sunset);
    document.getElementById("rwanda_icon").innerHTML = `<img src=\"https://openweathermap.org/img/wn/${newWeather.weather[0].icon}@2x.png\" alt=\"sunny icon\">`;
    backgroundColorComparison(newWeather.main.temp,"rwanda_comparison");
  })
  .catch(error => console.error("error fetching weather data:", error));
}

//function to set the weather in the sweden-part of the comparison. Creates a weatherobject throug the getCurrentWeatherData-method and 
//then sets the data to correct id's
function swedenCityWeather(citySweden) {
  getCurrentWeatherData(citySweden).then(newWeather => {
    document.getElementById("sweden_city_weather").innerText = capitalize(newWeather.weather[0].description);
    document.getElementById("sweden_city_temperature").innerText = newWeather.main.temp;
    document.getElementById("sweden_city_sunrise").innerText = convertUnixToDateTime(newWeather.sys.sunrise);
    document.getElementById("sweden_city_sunset").innerText = convertUnixToDateTime(newWeather.sys.sunset);
    document.getElementById("sweden_icon").innerHTML = `<img src=\"https://openweathermap.org/img/wn/${newWeather.weather[0].icon}@2x.png\" alt=\"sunny icon\">`;
    backgroundColorComparison(newWeather.main.temp,"sweden_comparison");
  })
  .catch(error => console.error("error fetching weather data:", error));
}

//function to set the data in free-search part of the weather app, in section 3. Creates a weatherobject throug the getCurrentWeatherData-method and 
//then sets the data to correct id's
function chosenCityWeather(cityname) {
  saveSearch(cityname); // Save new search
  loadRecentSearches(); // Update list with searches

  // Get weatherdata for the chosen city
  getCurrentWeatherData(cityname).then(newWeather => {
    document.getElementById("chosen_city_name").innerText = capitalize(cityname);
    document.getElementById("chosen_city_weather").innerText = capitalize(newWeather.weather[0].description);
    document.getElementById("chosen_city_temperature").innerText = newWeather.main.temp + " C°";
    document.getElementById("chosen_city_temperature_feels_like").innerText = newWeather.main.feels_like + " C°";
    document.getElementById("chosen_city_min_temperature").innerText = newWeather.main.temp_min + " C°";
    document.getElementById("chosen_city_max_temperature").innerText = newWeather.main.temp_max + " C°";
    document.getElementById("chosen_city_sunrise").innerText = convertUnixToDateTime(newWeather.sys.sunrise);
    document.getElementById("chosen_city_sunset").innerText = convertUnixToDateTime(newWeather.sys.sunset);
    document.getElementById("chosen_city_icon").innerHTML = `<img src=\"https://openweathermap.org/img/wn/${newWeather.weather[0].icon}@2x.png\" alt=\"sunny icon\">`;
    forecastBackgroundSwitch("section-3", newWeather.weather[0].icon)
  })
  .catch(error => console.error("error fetching weather data:", error));
}


//function that converts unix to datetime for increased readability
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

function backgroundColorComparison(temperature, id){
  if(temperature >= 30){
    document.getElementById(`${id}`).style.background = "linear-gradient(to bottom, #f56161 0%, #a00101 100%)";
  }
  else if(temperature >= 25){
    document.getElementById(`${id}`).style.background = "linear-gradient(to bottom, #ff7350 0%, #cc0000 100%)";
  }
  else if(temperature >= 20){
    document.getElementById(`${id}`).style.background = "linear-gradient(to bottom, #ff6600c2 0%, #ff0000bd 100%)";
  }
  else if(temperature >= 15){
    document.getElementById(`${id}`).style.background = "linear-gradient(to bottom, #f0aa64 0%, #fa7922 100%)";
  }
  else if(temperature >= 10){
    document.getElementById(`${id}`).style.background = "linear-gradient(to bottom, #ffd19d 0%, #b87658 100%)";
  }
  else if(temperature >= 5){
    document.getElementById(`${id}`).style.background = "linear-gradient(to bottom, #f5dbbe 0%, #c49783 100%)";
  }
  else if(temperature >= 0){
    document.getElementById(`${id}`).style.background = "linear-gradient(to bottom, #ccbdbd 0%, #818ab3 100%) ";
  }
   else if(temperature >= -5){
    document.getElementById(`${id}`).style.background = "linear-gradient(to bottom, #5594f1 0%, #90cdec 100%)";
  }
  else if(temperature >= -10){
    document.getElementById(`${id}`).style.background = "linear-gradient(to bottom, #0066ff 0%, #3db9f7 100%)";
  }
  else{
    document.getElementById(`${id}`).style.background="red";
  }
}

function saveSearch(city) {
  let searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
  // Add the new search to the beginning of the list
  searches.unshift(city);
  // Limit the list to the last 5 searches
  if (searches.length > 5) searches = searches.slice(0, 5);
  localStorage.setItem('recentSearches', JSON.stringify(searches));
}

function loadRecentSearches() {
  const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
  const recentSearchesContainer = document.getElementById('recent-searches');

  // Check that the element exists
  if (!recentSearchesContainer) {
    console.error("Elementet #recent-searches saknas i HTML-koden");
    return;
  }

  recentSearchesContainer.innerHTML = ''; // Clear earlier searches
  searches.forEach(city => {
    const searchItem = document.createElement('div');
    searchItem.className = 'search-item';
    searchItem.innerText = city;
    searchItem.onclick = () => chosenCityWeather(city);
    getForecastData(city); 
    recentSearchesContainer.appendChild(searchItem);
  });
}

let currentLatitude = "";
let currentLongitude = "";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

  function showPosition(position) {
    fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=df4c0154d893ba9c3ae1e611a27a169b`)
    .then(response => response.json())
    .then(currentCity => {
      chosenCityWeather(currentCity[0].name);
      getForecastData(currentCity[0].name); 
    })
    .catch(error => console.error("error fetching weather data:", error));
  }

  function startScript(){
    getLocation();
    let startingValueSweden = document.getElementById("sweden_cities").value;
    let startingValueRwanda = document.getElementById("rwanda_cities").value;
    swedenCityWeather(startingValueSweden);
    rwandaCityWeather(startingValueRwanda);
  }

  function capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }

  startScript();

  document.addEventListener('DOMContentLoaded', loadRecentSearches);

  
  