let storage = sessionStorage;
let screenHeight  = window.innerHeight
// let elHeight = document.querySelector(".quick-stats").offsetHeight

$(".stats").click((e)=>{
  storage.setItem("redirect","/blogs/")
  window.location = "/stats/"
})
// window.addEventListener("scroll", function (e) {
//     let currentPosition = window.pageYOffset;
//     console.log(currentPosition);
//     if (elHeight==(currentPosition + screenHeight)) {
//         console.log("Here I am");
//     }
// })
