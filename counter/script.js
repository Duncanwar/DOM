const num = document.getElementById("num");

const reset = document.getElementById("res");
const decrease = document.getElementById("dec")
const increase = document.getElementById("inc")

let numVal = document.getElementById("num").textContent;

decrease.addEventListener("click",()=>{
    numVal = parseInt(numVal)-1;
    num.textContent= numVal
})

increase.addEventListener("click",()=>{
    numVal = parseInt(numVal)+1;
    num.textContent= numVal
})

reset.addEventListener("click",()=>{
    num.textContent= 0
})