let timerDisplay= document.querySelector(".timerDisplay")
let startBtn= document.getElementById("startBtn")
let stopBtn= document.getElementById("stopBtn")
let resetBtn= document.getElementById("resetBtn")


// ************ Adding Event Listeners to click event 

let time= null

startBtn.addEventListener("click",()=>{
    if(time!==null){
        clearInterval(time)
    }
    time= setInterval(todo,10)
})

stopBtn.addEventListener("click",function(){
    clearInterval(time)
})

resetBtn.addEventListener("click",function(){
    clearInterval(time)
    timerDisplay.innerHTML= `00 : 00 : 00`
    msec = sec = min = 0;
})


// ************** Defining all Time Units 

let msec= 0
let sec= 0
let min= 0

function todo(){
    msec++
    if(msec==100){
        msec=0
        sec++
        if(sec==60){
            sec=0
            min++
            if(min==60){
                min=0
            }
        }
    }

    let msecString= msec<10 ? `0${msec}` : msec
    let secString= msec<10 ? `0${sec}` : sec
    let minString= msec<10 ? `0${min}` : min

    timerDisplay.innerHTML= `${minString} : ${secString} : ${msecString}`
}