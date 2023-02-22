
// get the window url
var currentUrl = window.location.href;
// get content div from the indexedDB.html file
var content = document.getElementById('content')
// get the nav links
var projectLink = document.getElementById('project-link')
var homeLink = document.getElementById('home-link')
var aboutLink = document.getElementById('about-link')

// Use fetch to get the files required ('home,projects and about')
let homeCont = await fetch(`./static/views/home.html`).
    then((c) => c.text()).
    catch(e => e)

let projectCont = await fetch(`./static/views/projects.html`).
    then((c) => c.text()).
    catch(e => e)

let aboutCont = await fetch(`./static/views/about.html`).
    then((c) => c.text()).
    catch(e => e)

// Load the home content into the content div when page loads
// change the home nav link background color
// set projects and about link background colors to inherit from parent element
if (window.location.pathname == '/') {
    content.innerHTML = homeCont
    homeLink.style.background="rgba(22,22,22)"
    projectLink.style.background="inherit"
    aboutLink.style.background="inherit"
}
// clear the content div
// Load the home content into the content div when home link is clicked
// change the home nav link background color
// set projects and about link background colors to inherit from parent element
homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = homeCont
    homeLink.style.background="rgba(22,22,22)"
    projectLink.style.background="inherit"
    aboutLink.style.background="inherit"
})

// clear the content div
// Load the projects content into the content div when projects link is clicked
// change the projects nav link background color
// set home and about link background colors to inherit from parent element
projectLink.addEventListener('click', (e) => {
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = projectCont
    projectLink.style.background="rgba(22,22,22)"
    homeLink.style.background="inherit"
    aboutLink.style.background="inherit"
})

// clear the content div
// Load the about content into the content div when about link is clicked
// change the about nav link background color
// set home and projects link background colors to inherit from parent element
aboutLink.addEventListener('click', (e) => {
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = aboutCont
    homeLink.style.background="inherit"
    projectLink.style.background="inherit"
    aboutLink.style.background="rgba(22,22,22)"
})

// Images auto-change



