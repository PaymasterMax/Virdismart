let storage = sessionStorage;
const controller = new AbortController()
const { signal } = controller
$(".submit").click(function (e) {
  e.preventDefault();
  let redirectUrl = storage.getItem("redirect") ? storage.getItem("redirect")  : "/"
  $(".loaders").css("display" , "flex");
  let data = new FormData(document.querySelector("form"));
let url = document.querySelector("form").action ? document.querySelector("form").action : "/accounts/";
  let xmlHttp = new XMLHttpRequest() ? new XMLHttpRequest() : new ActiveXObject();
  xmlHttp.onreadystatechange = function (e) {
    $(".loaders").css("display" , "none");
    if (this.readyState == 4 && this.status == 200) {
        let servData = JSON.parse(this.responseText);
        if (servData['redirect']) {
              window.location.href = servData['redirect']
        }
        if (servData['errors']) {
          $(".errors").html(servData['errors'])
          navigator.vibrate(600)
        }
    }
  }
  xmlHttp.open("POST",url,true)
  xmlHttp.setRequestHeader("X-CSRFToken",$(".token").val())
  xmlHttp.send(data)

})
