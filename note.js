


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












// THE RESIZING OF THE TEXTAREA

let textAreaText = document.getElementById('textAreaText')
textAreaText.addEventListener('input', () => {
    textAreaText.style.height = 'auto'
    textAreaText.style.height = textAreaText.scrollHeight + 'px'
})


logBtn.addEventListener('click', () => {
    let textInput = textAreaText.value
    if(textInput == ''){
        alert('please input a value')
    }else{
        let newLi = document.createElement('li')
        let span = document.createElement('span')
        span.setAttribute('class', 'spanEdit')
        newLi.textContent = textInput
        span.innerHTML = '\u00d7'
        newLi.appendChild(span);;
        newListing.appendChild(newLi)
        textAreaText.value = ''  
        textAreaText.setAttribute('class', 'change')
    }
    saveData()
})

newListing.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI'){
        e.target.style.backgroundColor = 'blue'
        saveData()
    } 
    
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})

//SAVING TO LOCAL STORAGE
function saveData(){
    localStorage.setItem('myData', newListing.innerHTML)
    localStorage.setItem('myColor', bodyColor.style.backgroundColor)
}

//SHOWING LOCAL STORAGE DATA
function showData(){
    newListing.innerHTML = localStorage.getItem('myData')
    bodyColor.style.backgroundColor = localStorage.getItem('myColor')
}
showData()