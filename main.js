const input = document.querySelector('.checkbox')
const menuBar = document.querySelector('.header')
const scrollToSchedule = document.querySelector('.scroll-schedule')
input.addEventListener('click', () =>{
    menuBar.classList.toggle("slide")
})

document.onclick = (e) =>{
    if (e.target.classList != "header" & e.target.classList != "checkbox") {
        input.checked = false
        menuBar.classList.remove('slide')
    }
}

scrollToSchedule.onclick = () =>{
    if (window.innerWidth <= 430) {
        window.scrollTo(0,950)
    }else{
        window.scrollTo(0,700)
    }
}
