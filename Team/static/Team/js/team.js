document.querySelectorAll(".team-img").forEach(item => {
  item.addEventListener("click",function (e) {
    if (window.getComputedStyle(document.querySelector(".image-preview")).display == "none") {
      document.querySelector(".image-preview").setAttribute("style","display:flex;")
      document.querySelector(".image-preview").children[1].src = this.src;
      document.querySelector(".image-preview").children[1].alt = this.alt;
      document.querySelector(".image-preview").children[1].title = this.title;
    }else{
      document.querySelector(".image-preview").children[1].src = this.src;
    }
  })
});
document.querySelector(".close-preview").addEventListener("click",function (e) {
  document.querySelector(".image-preview").setAttribute("style","display:none;")
})
