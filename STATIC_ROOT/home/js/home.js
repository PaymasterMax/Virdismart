let storage = sessionStorage;
$(".stats").click((e)=>{
  storage.setItem("redirect","/blogs/")
  window.location = "/stats/"
})
