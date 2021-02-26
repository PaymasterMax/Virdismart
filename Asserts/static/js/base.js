window.addEventListener("load" , function (e) {
  document.querySelector(".loading").setAttribute("style" , "display:none");
  let screenSize = window.innerHeight;
  let positionScreen = window.pageYOffset;
  if (positionScreen>screenSize) {
      document.querySelector(".go-top").setAttribute("style", "display:block")
  }
  if (positionScreen<screenSize) {
      document.querySelector(".go-top").setAttribute("style", "display:none")
  }
  let total_documentHeight = document.documentElement.scrollHeight
  $(".scrollbar").css("width",((positionScreen)/(total_documentHeight-screenSize))*100 + "%")
})
window.onscroll = (e)=>{
  let screenSize = window.innerHeight;
  let positionScreen = window.pageYOffset;
  let sticky = document.querySelector(".nav-wrapper");
  let target = document.querySelector(".header-block")

  if (target) {
    if (positionScreen>target.scrollHeight) {
      sticky.setAttribute("style","position:sticky;")
  }
  }
  let total_documentHeight = document.documentElement.scrollHeight
  if (positionScreen>(screenSize)/2) {
      document.querySelector(".go-top").setAttribute("style", "display:block")
  }
  if (positionScreen<(screenSize)/2) {
      document.querySelector(".go-top").setAttribute("style", "display:none")
  }
}
document.querySelector(".go-top").addEventListener("click",(e)=>{
  scrollTo(0,0)
})
document.querySelector(".trigger-side").addEventListener("click",function(e){
  document.querySelector(".menu-side").setAttribute("style","display:block;");
  this.setAttribute("style","display:none;")
})
document.querySelector(".close-bar").addEventListener("click",function(e){
  document.querySelector(".menu-side").setAttribute("style","display:none;");
    document.querySelector(".trigger-side").setAttribute("style","display:block")
})
