
const start=document.querySelector("#start")
const stop=document.querySelector("#stop")


function randomcolor(){
    let hex ='0123456789abcdef'
    let color="#"

    for (let i =0 ;i<6 ;i++) {

        color +=hex[Math.floor(Math.random()*16)]
        
    }

    return color

}

let intervalId
 function generatecolor (){
if(!intervalId){
    intervalId= setInterval(()=>{
        const body=   document.querySelector("body")
        body.style.background=randomcolor()
    },500)
}
   
 


 }

 start.addEventListener("click",()=>{
    console.log("click")
generatecolor()
 })

 stop.addEventListener("click",()=>{
    clearInterval(intervalId)
    intervalId=null
 })