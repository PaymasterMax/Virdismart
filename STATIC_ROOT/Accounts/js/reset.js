document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
  let qform = document.querySelector("form")
  let form = new FormData(qform);
  let xmlHTTP = new XMLHttpRequest() ? new XMLHttpRequest(): new ActiveXObject();
  let url = qform.getAttribute("action")
  let token = document.querySelector('.token');
  let target  = document.querySelector('.infor');
  document.querySelector(".loading").setAttribute("style", "display:flex")
  xmlHTTP.onreadystatechange = function (e) {
      if (this.readyState == 4 && this.status == 200) {
        let serverReponse = JSON.parse(this.responseText)
        document.querySelector(".loading").setAttribute("style", "display:none")
          target.innerHTML = serverReponse['infor'];
      }
  }
  xmlHTTP.open("POST", url, true);
  xmlHTTP.setRequestHeader("X-CSRFToken",token)
  xmlHTTP.send(form)
})
