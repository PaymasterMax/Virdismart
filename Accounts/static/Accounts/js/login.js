let storage = sessionStorage;
const controller = new AbortController()
const { signal } = controller
document.querySelector(".submit").addEventListener("click", function (e) {
  document.querySelector(".loading").setAttribute("style", "display:flex");
  e.preventDefault();
  let redirectUrl = storage.getItem("redirect") ? storage.getItem("redirect")  : "/"
let data = new FormData(document.querySelector("form"));
let url = document.querySelector("form").action ? document.querySelector("form").action : "/accounts/";
  let xmlHttp = new XMLHttpRequest() ? new XMLHttpRequest() : new ActiveXObject();
  xmlHttp.onreadystatechange = function (e) {
    document.querySelector(".loading").setAttribute("style", "display:none");
    if (this.readyState == 4 && this.status == 200) {
        let servData = JSON.parse(this.responseText);
        if (servData['redirect']) {
              window.location.href = servData['redirect']
        }
        if (servData['errors']) {
          document.querySelector(".errors").innerHTML = servData['errors']
          navigator.vibrate(600)
        }
    }
  }
  xmlHttp.open("POST",url,true)
  xmlHttp.setRequestHeader("X-CSRFToken",document.querySelector(".token").value)
  xmlHttp.send(data)

})
