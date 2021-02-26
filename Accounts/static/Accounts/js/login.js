$(".submit").click(function (e) {
  e.preventDefault();
  $(".loaders").css("display" , "flex");
  let data = new FormData(document.querySelector("form"));
  let inquiry = fetch("/accounts/" , {
    "method":"POST",
    "headers":{
      "X-CSRFToken":$(".token").val(),
    },
    "body":data
  })
  inquiry.then(e=>e.text())
  inquiry.then(e=> {
      // $(".loaders").css("display" , "none");
      console.log(e);
      // window.location = "/"
    },
    function (e) {
      console.log("error");
      $(".loaders").css("display" , "none");
    }
  )
})
