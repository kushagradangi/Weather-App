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


//to switch pages
function switchTab(clickedTab){

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
      }
  
    if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } 
    else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        getFromSessionStorage();
      }
  
    console.log("Current Tab", currentTab);
}
  

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