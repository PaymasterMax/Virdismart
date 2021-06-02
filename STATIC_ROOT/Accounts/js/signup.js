let storage = sessionStorage;
const controller = new AbortController()
const { signal } = controller
document.querySelector(".submit").addEventListener("click", function (e) {
  document.querySelector(".loading").setAttribute("style", "display:flex");
  document.querySelectorAll(".errors").forEach(item => {
      item.setAttribute("style","display:none");
  });
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
          Object.keys(servData['errors']).forEach(item => {
              let target = document.querySelector("."+item)
              if (item=="password1" || item=="password2") {
                document.querySelector(".password").setAttribute("style", "display:block")
                  document.querySelector(".password").innerHTML = servData['errors'][item][0]
              }else {
                console.log(item);
                target.setAttribute("style", "display:block")
                target.innerHTML = servData['errors'][item][0]
              }
          });
          navigator.vibrate(600)
        }
    }
  }
  xmlHttp.open("POST",url,true)
  xmlHttp.setRequestHeader("X-CSRFToken",document.querySelector(".token").value)
  xmlHttp.send(data)

})
