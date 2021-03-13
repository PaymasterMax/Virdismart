let storage = sessionStorage;
let screenHeight  = window.innerHeight
let grp1 = document.querySelector(".group-1")
let grp1_height = grp1.offsetTop + grp1.offsetHeight;
let grp2 = document.querySelector(".group-2")
let grp2_height = grp2.offsetTop + grp2.offsetHeight;
let grp3 = document.querySelector(".group-3")
let grp3_height = grp3.offsetTop + grp3.offsetHeight;
navbar = document.querySelector(".dev-navbar")
navbar1 = document.querySelector(".navbar2")
$(".stats").click((e)=>{
  storage.setItem("redirect","/blogs/")
  window.location = "/stats/"
})
$(".scroll-down").click((e)=>{
  scrollTo(0,document.querySelector(".group-1").offsetTop);
})
window.addEventListener("scroll", function (e) {
    let currentPosition = window.pageYOffset;
    if ((currentPosition+(navbar.offsetHeight)) >=grp1.offsetTop && currentPosition<=grp1_height) {
        navbar.setAttribute("style","background-color:"+window.getComputedStyle(grp1).backgroundColor)
        navbar1.setAttribute("style","background-color:"+window.getComputedStyle(grp1).backgroundColor)
    }
    if ((currentPosition+(navbar.offsetHeight)) >=grp2.offsetTop && currentPosition<=grp2_height) {
        navbar.setAttribute("style","background-color:"+window.getComputedStyle(grp2).backgroundColor)
        navbar1.setAttribute("style","background-color:"+window.getComputedStyle(grp2).backgroundColor)
    }
    if ((currentPosition+(navbar.offsetHeight)) >=grp3.offsetTop && currentPosition<=grp3_height) {
        navbar.setAttribute("style","background-color:"+window.getComputedStyle(grp3).backgroundColor)
        navbar1.setAttribute("style","background-color:"+window.getComputedStyle(grp3).backgroundColor)
    }
})
