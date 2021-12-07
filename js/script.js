 

var btnNext = document.querySelector("#next");
var btnPrev = document.querySelector("#prev");
var img = document.querySelector("img");
var photos = ["images/banner-1.jpg", "images/banner-2.jpg", "images/banner-3.jpg", "images/banner-4.jpg"]
var count = 0;
btnNext.addEventListener("click", nextfunction);



// nextfunction====

function nextfunction() {
    count++;
    if (count >= photos.length) {
        count = 0;
        img.src = photos[count];
    } else {
        img.src = photos[count];
    }

};

btnPrev.addEventListener("click", prevfunction);

// prevfunction ==========


function prevfunction() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
    } else {
        img.src = photos[count];
    }

}

setInterval(nextfunction, 2000);

// ============= side bar js==========

var btn3 = document.querySelectorAll("img");
var slide = document.querySelector(".item3_text");


btn3[3].addEventListener("click" , slideshow);

function slideshow(){
    if(slide.style.right == "0px")
    {
        slide.style.right = "-500px";
    }

    else{
        slide.style.right = "0px";
    }
}




var typed = new Typed('.auto-input', {
    strings: ['Shah Alam', 'Web Designer','Web Developer'],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed:100,
    loop:true,
  });
  
