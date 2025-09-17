
let count = 0
let interval = null;

const darkbtn = document.getElementById("theme")
const countdis = document.getElementById("count")
const incbtn = document.getElementById("inc")
const decbtn = document.getElementById("dec")
const reset = document.getElementById("reset")
const startbtn = document.getElementById("start")
const pausebtn = document.getElementById("pause")
const stepdisplay = document.getElementById("step")
const historybtn = document.getElementById("history")
const listitems = document.getElementById("items")

function updatedisplay(){
  countdis.innerText = count;
}
darkbtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode")
})
incbtn.addEventListener("click",()=>{
  count += parseInt(stepdisplay.value)
  updatedisplay()
})
decbtn.addEventListener("click",()=>{
  count -= parseInt(stepdisplay.value)
  updatedisplay()
})
reset.addEventListener("click",()=>{
  count = 0
  updatedisplay()
})

startbtn.addEventListener("click",()=>{
  if(!interval){
    interval = setInterval(()=>{
      count += parseInt(stepdisplay.value)
      updatedisplay()
    },1000)
  }
})

pausebtn.addEventListener("click",()=>{
  clearInterval(interval)
  interval = null;
  updatedisplay()
})

historybtn.addEventListener("click",()=>{
  let li = document.createElement("li")
  li.textContent = `Total ${count} At ${new Date().toLocaleTimeString()}`
  listitems.append(li)
  updatedisplay()
})