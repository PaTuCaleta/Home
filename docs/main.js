// menu show 
const ShowMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

ShowMenu('nav-toggle','nav-menu')
// remove menu mobile 
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    //activate link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

             // remove menu mobil
             const navMenu = document.getElementById('nav-menu')
             navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))