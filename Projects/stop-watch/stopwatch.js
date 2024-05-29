const timer = document.getElementById("timer");
const start = document.getElementById("start");
const Stop = document.getElementById("stop");
let count =1;
let hr=0 , min=0, sec=0;

function updateTime(){
    console.log (count);
    sec+=1;
    if(sec==60){
        min+=1;
    }
    if(min==60){
        hr+=1;
    }
    timer.innerText = `${hr} : ${min} : ${sec}`;
}
let interval;
// count =10;
start.addEventListener("click", ()=>{
    interval = setInterval(updateTime,1000);
});
// console.log(count);

Stop.addEventListener("click", () =>{
    clearInterval(interval)
});