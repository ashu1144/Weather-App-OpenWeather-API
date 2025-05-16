let city = document.querySelector("input");
let search =  document.querySelector("button")
var data;

const container =document.querySelector(".card")
container.style.transition="all 1s ease-out 0s"

setTimeout(()=>{
    container.style.transform = "translateX(0)"
},100)


const apiKey = "2e305a3ab9175462a40d6f24584b7c9d";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
const weatherIcon = document.querySelector(".weather_icon")

async function checkWeather(params) {
    const response = await fetch(apiUrl +`${city.value}&units=metric&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";

    }
    data  =  await response.json();

     setWeather()

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText=`${Math.floor(data.main.temp)}°C`
        document.querySelector(".humidity").innerText=`${data.main.humidity}`       
        document.querySelector(".wind").innerText=`${data.wind.speed}km/h`.toUpperCase();
        document.querySelector("#deg").innerText=`Deg:${data.wind.deg}`
    
}

const setWeather = ()=>{
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }

}

search.addEventListener("click", function() {
    checkWeather()
       
  });



