// Menu Show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle' , 'nav-menu')

// Active and Remove Menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove Menu Mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// AOS 
$(document).ready(function () {
    AOS.init();
});