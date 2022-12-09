
document.getElementById('city-btn').addEventListener('click', ()=>{
    let getCityName = document.getElementById('city-name').value;
    let apiKey = 'fc436c486d8043e316f221ef6c5f8172';
    let urlLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${getCityName}&limit=1&appid=${apiKey}`;

    function fetchLatLon(url){
        fetch(url)
        .then(res => res.json())
        .then(data => getLatLongs(data));
        
        function getLatLongs(data) {
            console.log(data); 
            let cityLat;
            let cityLong;
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                cityLat = element.lat;
                cityLong = element.lon;
            }
           let url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLong}&appid=${apiKey}`;
           fetch(url)
           .then(res =>res.json())
           .then(data => {
            console.log(data.name);
            console.log(data);
                let locationName = document.getElementById('location');
                locationName.innerText = data.name;
                let currentTemp = document.getElementById('currentTemp');
                let getTemp = data.main.temp - 273.15;
                let getTempFixed = getTemp.toFixed(1); 
                currentTemp.innerText = getTempFixed ;

           });
        }
       
    }
    fetchLatLon(urlLatLon);



});


