let slideIndex = 1;
showSlides(slideIndex);

// Functie om van slide te wisselen (n = 1 voor volgende, n = -1 voor vorige)
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Hoofdfunctie om de slides te tonen/verbergen
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    // Ga terug naar de eerste slide als je aan het einde bent
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Ga naar de laatste slide als je bij de eerste op 'vorige' klikt
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Verberg eerst alle slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Toon alleen de huidige slide
    slides[slideIndex - 1].style.display = "block";
}