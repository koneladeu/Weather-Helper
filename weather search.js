const container = document.querySelector('.container');
const search = document.querySelector('.searchèbox button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () =>{
    const APIkey = "e211ea3223c2d5c0c087bf7a19cd3f81";
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

        fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}').then(Response => Response.json).then(json =>{
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-box .humidity span');
            const wind = document.querySelector('.weather-box .wind span');

            switch(json.weather[0].main){
                case 'Clear':
                    image.src = 'images/images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/images/snow.png';
                    break;        
                case 'Clouds':
                    image.src = 'images/images/cloud.png';
                    break;  
                case 'Mist':
                    image.src = 'images/images/mist.png';
                    break;  
                case 'Haze':
                    image.src = 'images/images/clear.png';
                    break;     
                default:
                    image.src = 'images/images/cloud.png';      
            }
        })
})