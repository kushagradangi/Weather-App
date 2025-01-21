const API_KEY = "d2d9bccc7b48e821930131fca809ce88";

//function that renders data on Display
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

