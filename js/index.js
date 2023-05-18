let contenScroll = document.getElementById("contentscroll");
let card = document.querySelector(".what_our__box ");
document.addEventListener('click', (e) =>{
    if (e.target.matches("#submit")) {
        //e.preventDefault()
    }
    if (e.target.matches("#scrollright")) {
        
        contenScroll.scrollLeft +=card.offsetWidth;
    }
    if (e.target.matches("#scrollleft")) {
        
        contenScroll.scrollLeft -=card.offsetWidth;
        
    }
    if (e.target.matches("#video-main")) {
        e.target.play();
        if (e.target.currentTime > 0) {
            e.target.style.height = "initial";
            e.target.style.width = "54%"
        }
    }
   
})