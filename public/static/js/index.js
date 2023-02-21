

var currentUrl = window.location.href;
var content = document.getElementById('content')

var projectLink = document.getElementById('project-link')
var homeLink = document.getElementById('home-link')
var aboutLink = document.getElementById('about-link')


let homeCont = await fetch(`./static/views/home.html`).
    then((c) => c.text()).
    catch(e => e)



let projectCont = await fetch(`./static/views/projects.html`).
    then((c) => c.text()).
    catch(e => e)

let aboutCont = await fetch(`./static/views/about.html`).
    then((c) => c.text()).
    catch(e => e)
console.log()
if (window.location.pathname == '/') {
    content.innerHTML = homeCont
    homeLink.style.background="rgba(22,22,22)"
    projectLink.style.background="inherit"
    aboutLink.style.background="inherit"


}
homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = homeCont
    homeLink.style.background="rgba(22,22,22)"
    projectLink.style.background="inherit"
    aboutLink.style.background="inherit"
})

projectLink.addEventListener('click', (e) => {
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = projectCont
    window.location.pathname =window.location.pathname +"projects"
    
    projectLink.style.background="rgba(22,22,22)"
    homeLink.style.background="inherit"
    aboutLink.style.background="inherit"
})
aboutLink.addEventListener('click', (e) => {
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = aboutCont
    homeLink.style.background="inherit"
    projectLink.style.background="inherit"
    aboutLink.style.background="rgba(22,22,22)"
})

// Images auto-change



