
let openMenu = document.getElementById('openMenu')
let footerSmaller = document.getElementById('footerSmaller')
let closeMenu = document.getElementById('closeMenu')

openMenu.addEventListener('click', () => {
    if(footerSmaller.style.display == 'none'){
        footerSmaller.style.display = 'block'
        openMenu.style.display = 'none'
    }
})
closeMenu.addEventListener('click', () => {
    if(footerSmaller.style.display == 'block'){
        footerSmaller.style.display = 'none'
        openMenu.style.display = 'block'
    }
})






let weatherBtn = document.getElementById('searchBtn')

let icon = document.getElementById('icon')
let text = document.getElementById('text')
let country = document.getElementById('country')
let latitude = document.getElementById('latitude')
let longitude = document.getElementById('longitude')
let local_time = document.getElementById('local-time')
let name = document.getElementById('name')
let region = document.getElementById('region')
let wind_direction = document.getElementById('wind-direction')
let temperature = document.getElementById('temperature')

weatherBtn.addEventListener('click', () => {
    let citynameIn = document.getElementById('searchBox')
    let cityname = citynameIn.value
    if(cityname == ''){
        alert('City Name is empty')

        icon.innerHTML = ''
        text.textContent = ''
        country.textContent = ''
        latitude.textContent = ''
        longitude.textContent = ''
        local_time.textContent = ''
        name.textContent = ''
        region.textContent = ''
        wind_direction.textContent = ''
        temperature.textContent = ''
    }
    else{
        fetch(`http://api.weatherapi.com/v1/current.json?key=1fadaa3b161f465384882631233107&q=${cityname}`)
        .then(response => {
           return response.json()
        })
        .then(data => {
            icon.innerHTML = `<img src=${data.current.condition.icon}>`
            text.textContent = data.current.condition.text
            country.textContent = 'Country: ' + data.location.country
            latitude.textContent = 'Latitude: ' + data.location.lat
            longitude.textContent = 'Longitude: ' + data.location.lon
            local_time.textContent = 'Local time: ' + data.location.localtime
            name.textContent = 'Name: ' + data.location.name
            region.textContent = 'Region: ' + data.location.region
            wind_direction.textContent = 'Wind direction: ' + data.current.wind_dir
            temperature.textContent = data.current.temp_c + ' degree celsius'
           console.log(data);
        })
        .catch(error => {
            console.error('error ' + error);
        })
    }
    citynameIn.value = ''
})


function deliverWeather(){
    fetch(`http://api.weatherapi.com/v1/current.json?key=1fadaa3b161f465384882631233107&q=lagos`)
    .then(response => {
       return response.json()
    })
    .then(data => {
        icon.innerHTML = `<img src=${data.current.condition.icon}>`
        text.textContent = data.current.condition.text
        country.textContent = 'Country: ' + data.location.country
        latitude.textContent = 'Latitude: ' + data.location.lat
        longitude.textContent = 'Longitude: ' + data.location.lon
        local_time.textContent = 'Local time: ' + data.location.localtime
        name.textContent = 'Name: ' + data.location.name
        region.textContent = 'Region: ' + data.location.region
        wind_direction.textContent = 'Wind direction: ' + data.current.wind_dir
        temperature.textContent = data.current.temp_c + ' degree celsius'
       console.log(data);
    })
    .catch(error => {
        console.error('error ' + error);
    })
}

deliverWeather()