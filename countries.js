
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






let searchBox = document.getElementById('searchBox')
let searchBtn = document.getElementById('searchBtn')


searchBtn.addEventListener('click', () => {
    let inputValue = searchBox.value

    if(inputValue == ''){
        alert('field cannot be empty')
    }else{
        fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
    
            let fullname1 = data[0].name.common
            let capital1 = data[0].capital[0]
            let area1 = data[0].area
            let continent1 = data[0].continents[0]
            let currencies = data[0].currencies
            let independence1 = data[0].independent
            let population1 = data[0].population
            let startOfWeek = data[0].startOfWeek
            let region1 = data[0].region
            let subRegion1 = data[0].subregion
            let timezones = data[0].timezones[0]
    
            let currenyName = Object.entries(currencies)[0][1].name
            let currenySymbol = Object.entries(currencies)[0][1].symbol
    
            let flag = document.getElementById('flag')
            let name = document.getElementById('name')
            let capital = document.getElementById('capital')
            let area = document.getElementById('area')
            let borders = document.getElementById('borders')
            let continent = document.getElementById('continent')
            let currency = document.getElementById('currency')
            let currencySymbol = document.getElementById('currencySymbol')
            let coatOfArm = document.getElementById('coatOfArm')
            let independence = document.getElementById('independence')
            let maps = document.getElementById('maps')
            let population = document.getElementById('population')
            let weekStart = document.getElementById('weekStart')
            let region = document.getElementById('regon')
            let subRegion = document.getElementById('subRegion')
            let timeZone = document.getElementById('timeZone')
    
            flag.src = data[0].flags.png
            name.textContent = 'Country Name: '  + fullname1
            capital.textContent = 'Capital: ' + capital1
            area.textContent = 'Area: ' + area1
            continent.textContent = 'Continent: ' + continent1
            currency.textContent = 'Currency: ' + currenyName
            currencySymbol.textContent = 'Currency Symbol: ' + currenySymbol
            coatOfArm.src = data[0].coatOfArms.png
            independence.textContent = 'Independece: ' + independence1
            population.textContent = 'Population: ' + population1
            weekStart.textContent = 'Week Start: ' + startOfWeek
            region.textContent = 'Region: ' + region1
            subRegion.textContent = 'Sub Region: ' + subRegion1
            timeZone.textContent = 'Time zones: ' + timezones
            maps.href = data[0].maps.googleMaps
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        })
        searchBox.value = ''
    }
        
})

searchBox.addEventListener('keydown', () => {
    let EnterKey = event.key
    let inputValue = searchBox.value
    if(EnterKey == 'Enter' && inputValue == ''){
        alert('field cannot be empty')
    }else if(EnterKey == 'Enter'){
        fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
    
            let fullname1 = data[0].name.common
            let capital1 = data[0].capital[0]
            let area1 = data[0].area
            let continent1 = data[0].continents[0]
            let currencies = data[0].currencies
            let independence1 = data[0].independent
            let population1 = data[0].population
            let startOfWeek = data[0].startOfWeek
            let region1 = data[0].region
            let subRegion1 = data[0].subregion
            let timezones = data[0].timezones[0]
    
            let currenyName = Object.entries(currencies)[0][1].name
            let currenySymbol = Object.entries(currencies)[0][1].symbol
    
            let flag = document.getElementById('flag')
            let name = document.getElementById('name')
            let capital = document.getElementById('capital')
            let area = document.getElementById('area')
            let borders = document.getElementById('borders')
            let continent = document.getElementById('continent')
            let currency = document.getElementById('currency')
            let currencySymbol = document.getElementById('currencySymbol')
            let coatOfArm = document.getElementById('coatOfArm')
            let independence = document.getElementById('independence')
            let maps = document.getElementById('maps')
            let population = document.getElementById('population')
            let weekStart = document.getElementById('weekStart')
            let region = document.getElementById('regon')
            let subRegion = document.getElementById('subRegion')
            let timeZone = document.getElementById('timeZone')
    
            flag.src = data[0].flags.png
            name.textContent = 'Country Name: '  + fullname1
            capital.textContent = 'Capital: ' + capital1
            area.textContent = 'Area: ' + area1
            continent.textContent = 'Continent: ' + continent1
            currency.textContent = 'Currency: ' + currenyName
            currencySymbol.textContent = 'Currency Symbol: ' + currenySymbol
            coatOfArm.src = data[0].coatOfArms.png
            independence.textContent = 'Independece: ' + independence1
            population.textContent = 'Population: ' + population1
            weekStart.textContent = 'Week Start: ' + startOfWeek
            region.textContent = 'Region: ' + region1
            subRegion.textContent = 'Sub Region: ' + subRegion1
            timeZone.textContent = 'Time zones: ' + timezones
            maps.href = data[0].maps.googleMaps
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        })
        searchBox.value = ''
    }
})



function displayCountries(){
    fetch("https://restcountries.com/v3.1/name/britain")
    .then(response => {
        return response.json()
    })
    .then(data => {

        let fullname1 = data[0].name.common
        let capital1 = data[0].capital[0]
        let area1 = data[0].area
        let continent1 = data[0].continents[0]
        let currencies = data[0].currencies
        let independence1 = data[0].independent
        let population1 = data[0].population
        let startOfWeek = data[0].startOfWeek
        let region1 = data[0].region
        let subRegion1 = data[0].subregion
        let timezones = data[0].timezones[0]

        let currenyName = Object.entries(currencies)[0][1].name
        let currenySymbol = Object.entries(currencies)[0][1].symbol

        let flag = document.getElementById('flag')
        let name = document.getElementById('name')
        let capital = document.getElementById('capital')
        let area = document.getElementById('area')
        let borders = document.getElementById('borders')
        let continent = document.getElementById('continent')
        let currency = document.getElementById('currency')
        let currencySymbol = document.getElementById('currencySymbol')
        let coatOfArm = document.getElementById('coatOfArm')
        let independence = document.getElementById('independence')
        let maps = document.getElementById('maps')
        let population = document.getElementById('population')
        let weekStart = document.getElementById('weekStart')
        let region = document.getElementById('regon')
        let subRegion = document.getElementById('subRegion')
        let timeZone = document.getElementById('timeZone')

        flag.src = data[0].flags.png
        name.textContent = 'Country Name: '  + fullname1
        capital.textContent = 'Capital: ' + capital1
        area.textContent = 'Area: ' + area1
        continent.textContent = 'Continent: ' + continent1
        currency.textContent = 'Currency: ' + currenyName
        currencySymbol.textContent = 'Currency Symbol: ' + currenySymbol
        coatOfArm.src = data[0].coatOfArms.png
        independence.textContent = 'Independece: ' + independence1
        population.textContent = 'Population: ' + population1
        weekStart.textContent = 'Week Start: ' + startOfWeek
        region.textContent = 'Region: ' + region1
        subRegion.textContent = 'Sub Region: ' + subRegion1
        timeZone.textContent = 'Time zones: ' + timezones
        maps.href = data[0].maps.googleMaps
        // console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
    }


    displayCountries()