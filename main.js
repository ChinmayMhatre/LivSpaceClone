
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


  // tabs

  var tabButtons=document.querySelectorAll(".tab-container .button-container button");
  var tabPanels=document.querySelectorAll(".tab-container .tab-panel");
  
  function showpanel(index){
    for (var i =0 ; i < tabButtons.length ; i ++){
      tabButtons[i].style.border="";
      tabButtons[i].style.color="";
    }
    
    tabPanels.forEach(function(node){
      node.style.display="none";
    })

    tabButtons[index].style.borderBottom="4px solid  #eb595f";
    tabButtons[index].style.color=" #eb595f";

    tabPanels[index].style.display="block"
  }
  
  showpanel(0);

 


  $(document).ready(function() {

    // Gets the video src from the data-src on each button
    var videoSrc;  
    $('.video-btn').click(function() {
        videoSrc = $(this).data( "src" );
        console.log(videoSrc);
    });
    console.log(videoSrc);
    
     
  
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',videoSrc); 
    }) 
        
        
    
    
      
      
    // document ready  
    });
    
    
    