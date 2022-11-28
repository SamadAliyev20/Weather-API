const url='https://api.openweathermap.org/data/2.5/';
const key='b70c327c0d7333cd40ef00a4e662ab06';

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value.toLowerCase());
}
const getResult =(cityName) =>
{
 let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
 fetch(query)
 .then(weather => {
    return weather.json()
 })
 .then(displayResult)
}
const displayResult = (result) => {

 let city = document.querySelector('.city')
 city.innerText =`${result.name}, ${result.sys.country}`

 let temp = document.querySelector('.temp')
 temp.innerText=`${Math.round(result.main.temp)}°C`
 let weatherIcon=document.querySelector('.weather-icon')
 weatherIcon.innerHTML=`<img src="icons/${result.weather[0].icon}.png">;`

 let desc =document.querySelector('.desc')
 desc.innerText=result.weather[0].description
 
 let minmax = document.querySelector('.minmax')
 minmax.innerText=`${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c `
}


const searchBar=document.getElementById('searchBar');
searchBar.addEventListener('keypress',setQuery)