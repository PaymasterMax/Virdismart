var scrollPos = 0;
window.addEventListener("load" , function (e) {
  document.querySelector(".loading").setAttribute("style" , "display:none");
  let screenSize = window.innerHeight;
  let positionScreen = window.pageYOffset;
  let total_documentHeight = document.documentElement.scrollHeight
  $(".scrollbar").css("width",((positionScreen)/(total_documentHeight-screenSize))*100 + "%")
})
window.onscroll = (e)=>{
  let screenSize = window.innerHeight;
  let positionScreen = window.pageYOffset;
  let total_documentHeight = document.documentElement.scrollHeight
  let navbar = (window.getComputedStyle(document.querySelectorAll(".dev-nav")[0]).display =="flex") ? document.querySelectorAll(".dev-nav")[0] : document.querySelectorAll(".dev-nav")[1]
  if (positionScreen<=screenSize) {
    if (window.getComputedStyle(document.querySelector(".go-top")).display == "flex") {
        document.querySelector(".go-top").setAttribute("style", "display:none;")
    }
  }else {
    if (window.getComputedStyle(document.querySelector(".go-top")).display == "none") {
        document.querySelector(".go-top").setAttribute("style", "display:flex;")
    }
    if (scrollPos<positionScreen) {
      navbar.classList.remove("navbars");
    }else {
      navbar.classList.add("navbars");
    }
  }
  scrollPos = positionScreen;
}
document.querySelector(".go-top").addEventListener("click",(e)=>{
  scrollTo(0,0)
  document.querySelector(".go-top").setAttribute("style", "display:none")
})
document.querySelector(".bout-us").addEventListener("click",function (e) {
  if (window.getComputedStyle(document.querySelector(".menu-side")).display == "block") {
      document.querySelector(".menu-side").setAttribute("style", "display:block;")
  }
})
document.querySelector(".trigger-side").addEventListener("click",function(e){
  document.querySelector(".menu-side").setAttribute("style","display:block;");
  this.setAttribute("style","display:none;")
})
document.querySelector(".close-bar").addEventListener("click",function(e){
  document.querySelector(".menu-side").setAttribute("style","display:none;");
    document.querySelector(".trigger-side").setAttribute("style","display:block")
})
