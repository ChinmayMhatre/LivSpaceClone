
const chatbutton = document.querySelector(".open-button");
const chatpop= document.querySelector(".chat-popup");
const close= document.querySelector(".headsec img");


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

//   function closeForm() {
//     document.getElementById("myForm").style.display = "none";
//   }

  const tl = new TimelineMax();

  tl.fromTo(chatbutton,2,{y:"200%"},{y:"0%"  ,ease: Power2.easeInOut});

  chatbutton.addEventListener("click",function(){
    tl.fromTo(chatbutton,1,{y:"0%"},{y:"200%"  ,ease: Power2.easeInOut});
    tl.fromTo(chatpop,1.2,{y:"200%"},{y:"0%"  ,ease: Power2.easeInOut},"-=0.8");
  })

  close.addEventListener("click",function(){
    tl.fromTo(chatpop,1.5,{y:"0%"},{y:"200%"  ,ease: Power2.easeInOut});
    tl.fromTo(chatbutton,1.2,{y:"200%"},{y:"0%"  ,ease: Power2.easeInOut},"-=0.8");
  })
