let accordion=Array.from(document.getElementsByClassName("accordion"))
let icon=Array.from(document.getElementsByClassName("icon"))

accordion.forEach((el)=>{
    el.addEventListener("click",function(){
        let panel=this.nextElementSibling
        
        if(panel.style.display=="block"){
            panel.style.display="none"
            el.children[0].style.transform = 'rotate(0deg)';

        }
        else{
            panel.style.display ="block"
            el.children[0].style.transform = 'rotate(180deg)';
        }
    })
})
function rotate(){
    let icon=document.getElementsByClassName("icon")
    
}
