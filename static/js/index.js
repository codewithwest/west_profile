

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

if (currentUrl == 'http://127.0.0.1:5500/index.html') {
    content.innerHTML = projectCont

}
homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = homeCont
})

projectLink.addEventListener('click', (e) => {
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = projectCont
})
aboutLink.addEventListener('click', (e) => {
    e.preventDefault()
    content.innerHTML = ""
    content.innerHTML = aboutCont
})
var reversedPic = 0;
function leftBtnClick(targetImg, targetCount,highestCount) {
    let img = document.getElementById(targetImg)
    if (targetCount < highestCount) {
        img.setAttribute('src',`./static/assets/projects/flutterWD/flutter${reversedPic}.png`)
        reversedPic = targetCount+1
        console.log(targetCount)
    }
    else{
        reversedPic = targetCount = 0
    }
}

var leftBtn = document.getElementById('change_right0')
leftBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    leftBtnClick('pcImg0', reversedPic,7)
})