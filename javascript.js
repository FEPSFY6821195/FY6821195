var slideSrc = ["Slide1.PNG","Slide2.PNG","Slide3.PNG","Slide4.PNG","Slide5.PNG"];
var currentSlide = 0;

function showSlide(){
    document.getElementById('slide').src = slideSrc[currentSlide];
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % slideSrc.length;
    showSlide();
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + slideSrc.length) % slideSrc.length;
    showSlide();
}

function showSlideNumber(slideNumber){
    currentSlide = slideNumber - 1;
    showSlide();
}