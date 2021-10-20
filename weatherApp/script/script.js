
const apiKey = "4d8fb5b93d4af21d66a2948710284366";
var d = new Date();
var n = d.toLocaleString("en-US", { "weekday": "long" }); // Monday

let temp = document.querySelector(".weather-temp");
let situation = document.querySelector(".weather-desc");
let windSpeed = document.querySelector(".wind .value");
let humidity = document.querySelector(".humidity .value");
let feels = document.querySelector(".feels .value");
let date = document.querySelector(".date-dayname");
let place = document.querySelector(".location");
let dateDay = document.querySelector(".date-day");
let city = document.querySelector("#city");

   const url = `https://api.openweathermap.org/data/2.5/weather?q=amman&appid=${apiKey}&units=metric`;
   async function getJason(){
        const respnse = await fetch(url)
        const data=await respnse.json();
        console.log(data);

        place.innerHTML = city.value
        
        temp.innerHTML = data.main.temp + " °C";
       
        situation.innerHTML = data.weather[0]["description"];
       
        windSpeed.innerHTML = data.wind.speed + " km/h";
        
        humidity.innerHTML = data.main.humidity + " %";
        
        feels.innerHTML = data.main.feels_like;

        dateDay.innerHTML = new Date().toDateString();
        
        date.innerHTML = n;

    }

    getJason()

    function cities(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        async function getJason(){
             const respnse = await fetch(url)
             const data=await respnse.json();
             console.log(data);
            
        temp.innerHTML = data.main.temp + " °C";
       
        situation.innerHTML = data.weather[0]["description"];

        windSpeed.innerHTML = data.wind.speed + " km/h";
        
        humidity.innerHTML = data.main.humidity + " %";
      
        feels.innerHTML = data.main.feels_like;
        
        date.innerHTML = n;
             
         }
     
         getJason();
    }

     city.addEventListener("change", (e) =>{
        cities(e.target.value);
        place.innerHTML=e.target.value;
    });

    




