nav=document.getElementById("nav-menu");
home=document.getElementById("home");
nav1=document.getElementById("nav1");
function clickme(){
   nav.style.zIndex="1";
   nav.style.opacity = "1";
   nav1.style.opacity = "0";
   home.style.opacity = "0";
   // nav.style.background="white";
   console.log("jatin");
}
function back(){
   
    nav.style.zIndex="-1";
    nav.style.opacity = "0";
    nav1.style.opacity = "1";
   home.style.opacity = "1";
}
