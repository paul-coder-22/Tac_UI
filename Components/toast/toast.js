
const demoToast=document.querySelector(".demo-toast")

const baselineBtn=document.querySelector("#baselineBtn")
const leadingBtn=document.querySelector("#leadingBtn")
const topRightBtn=document.querySelector("#topRightBtn")

baselineBtn.addEventListener("click",()=>{
    resetPos()
    demoToast.classList.add("toast-active","toast-baseline")
    demoToast.classList.add()
    hideToast()
})

leadingBtn.addEventListener("click",()=>{
    resetPos()
    demoToast.classList.add("toast-active","toast-leading")
    hideToast()
})

topRightBtn.addEventListener("click",()=>{
    resetPos()
    demoToast.classList.add("toast-active","toast-top-right")
    hideToast()
})

function resetPos(){
    demoToast.classList.remove("toast-active","toast-baseline","toast-leading","toast-top-right")
}
function hideToast(){
    setTimeout(()=>{
        demoToast.classList.remove("toast-active")
    },4000)
}
