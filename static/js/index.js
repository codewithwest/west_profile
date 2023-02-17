
var projectBox = document.getElementsByClassName('projectBox')
var currentUrl = window.location.href;
var content = document.getElementById('content')

var projectLink = document.getElementById('project-link')
var homeLink = document.getElementById('home-link')
var aboutLink = document.getElementById('about-link')


 
let homeCont =   await fetch(`./static/views/home.html`).
    then((c)=> c.text()).
    catch(e=>e)

if (currentUrl == 'http://127.0.0.1:5500/index.html'){
    content.innerHTML = homeCont
}

let projectCont = await fetch(`./static/views/projects.html`).
then((c)=> c.text()).
catch(e=>e)

let aboutCont = await fetch(`./static/views/about.html`).
then((c)=> c.text()).
catch(e=>e)

homeLink.addEventListener('click',(e)=>{
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = homeCont
})

projectLink.addEventListener('click',(e)=>{
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = projectCont
})
aboutLink.addEventListener('click',(e)=>{
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = aboutCont
})










