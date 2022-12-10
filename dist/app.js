
const getLatLon = async()=>{
    const searchCity = document.getElementById('searchCity').value;
    let apiKey = 'fc436c486d8043e316f221ef6c5f8172';
    let urlLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=${apiKey}`;
    const res = await fetch(urlLatLon);
    const data = await res.json();
    showCity(data);
}

const showCity = (data) =>{
    for (let i = 0; i < data.length; i++) {
        const elements = data[i];
        const showContainer = document.getElementById('showContainer');
        const div = document.createElement('div');
        div.innerHTML = `
            <p onclick="getTemp('${elements.lat}', '${elements.lon}','${elements.name}', '${elements.country}')" class="text-white border-b border-white px-10 py-4">${elements.name}, ${elements.country}</p>
        `;
        showContainer.appendChild(div);
    }
}

const getTemp = async(lat, lon, city, country) =>{
    const showContainer = document.getElementById('showContainer');
    showContainer.innerHTML = '';
    let locationName = document.getElementById('location');
    locationName.innerText = `${city}, ${country}`;
    let apiKey = 'fc436c486d8043e316f221ef6c5f8172';
    const urlTemp = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const res = await fetch(urlTemp);
    const data = await res.json();
    displayTemp(data);
}

const displayTemp = (data) =>{  
    console.log(data);
    let currentTemp = document.getElementById('currentTemp');
    let getTemp = data.main.temp - 273.15;
    let getTempFixed = getTemp.toFixed(1); 
    currentTemp.innerText = getTempFixed ;
    const windSpeed = document.getElementById('windSpeed');
    windSpeed.innerText = data.wind.speed;
    
    const weather = data.weather;
    for (let i = 0; i < weather.length; i++) {
        const element = weather[i];
        const rain = document.getElementById('rain');
        rain.innerText = element.main;
        
    }
}