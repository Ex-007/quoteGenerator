let show = document.getElementById('show')
let generateBtn = document.getElementById('generateBtn')













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


function fetchJoke(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then( response => {
        return response.json()
    })
    .then(data => {
        let mainText = document.getElementById('mainText')
        mainText.textContent = data.joke
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
}

generateBtn.addEventListener('click', fetchJoke)


fetchJoke()

