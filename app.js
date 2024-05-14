

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

















let deleteBtn = document.getElementById('deleteBtn')
let searchBtn = document.getElementById('searchBtn')
let searchBox = document.getElementById('searchBox')
let mainDiv = document.getElementById('mainDiv')
let newQuoteDiv = document.getElementById('newQuoteDiv')


searchBtn.addEventListener('click', () => {
    let keyWord = searchBox.value
    if(keyWord == ''){
        alert('box cannot be empty')
    }else{
        fetch(`https://api.quotable.io/search/quotes?query=${keyWord}`)
        .then(response => {
            return response.json()
            
        })
        .then(data => {
            data.results.forEach(element => {

                let quoteContent = element.content;
                let quoteAuthor = element.author


            let newDiv = document.createElement('div')
            let newAuthor = document.createElement('li')
            newAuthor.setAttribute('class', 'authorName')
            newDiv.setAttribute('class', 'quoteContent')
            
            newDiv.textContent = quoteContent
            newAuthor.textContent = quoteAuthor
            newDiv.append(newAuthor)
            mainDiv.style.display = 'none'

            newQuoteDiv.appendChild(newDiv)
            console.log(element)
        });
        searchBox.value = ''

        })
        .catch(error => {
            console.error('The error is ' + error);
        })
    }
})



function generateQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => {
        return response.json()
    })
    .then(data => {

        let mainText = document.getElementById('mainText')
        let authorName = document.getElementById('authorName')

        let content = data.content;
        let authorIn = data.author;

            mainText.textContent = content
            authorName.textContent = authorIn
    })
    .catch(error => {
        console.error('The error is ' + error);
    })
}
// ``



deleteBtn.addEventListener('click', generateQuote)
generateQuote()
