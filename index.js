const API_KEY = "d2d9bccc7b48e821930131fca809ce88";

//function that renders API data on Display
function renderWeatherInfo(data){

    newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    document.body.appendChild(newPara);
}

//function that fetch API and converts data into JSON format
async function fetchWeatherDetails(){

    try{
        let city = "goa"

         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
         const data = await response.json();

        console.log("Weather App:-> ", data);

        renderWeatherInfo(data);
    }
    catch(err){

    }

    

}

fetchWeatherDetails();

//fetch user Coordinates for default data
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}