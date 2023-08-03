const navToggleBtn=document.querySelector("#nav-toggle-btn")
const closeAsideBtn=document.querySelector("#close-aside-btn")
const asideComp=document.querySelector(".aside")


navToggleBtn.addEventListener("click",()=>{
   asideComp.classList.add("aside-active")
})

closeAsideBtn.addEventListener("click",()=>{
   asideComp.classList.remove("aside-active")
})

// modal demo
const modalDemoContainer=document.querySelector("#modal-demo-container")
const modalDemoBtn=document.querySelector("#modal-demo-btn")
const modalDemoDismissBtn=document.querySelector("#modal-demo-dismiss")

modalDemoBtn.addEventListener("click",()=>{
   modalDemoContainer.classList.add("active-modal");
   document.body.style.overflow="hidden"
})

modalDemoDismissBtn.addEventListener("click",()=>{
   modalDemoContainer.classList.remove("active-modal");
   document.body.style.overflow="auto"
})