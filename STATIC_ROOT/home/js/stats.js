let drawer = document.querySelector("#analitics").getContext('2d')
let chrt = new Chart(drawer, {
    type:"line",
    data:{
          labels:["Jan","Feb","Mar","April","May","June","July","August","Sept","Aug","Nov","Dec"],
          datasets:[{
                label:"Number of monthly users overtime",
                data:[10,120,30,140,50,160,70,100,190,0,10,120,130],
                backgroundColor:[
                    "#4a4a4",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                ],
                borderColor:[
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                    "rgba(255,0,0,1)",
                ],
                borderWidth:1,
          }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },
    tooltips:{
      mode:"point"
    }
})
