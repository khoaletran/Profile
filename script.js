document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    const navLinks = document.querySelectorAll("menu a");

    let currentIndex = 0;
    let isScrolling = false;

    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= slides.length) index = slides.length - 1;

        currentIndex = index;
        const slideHeight = slides[0].offsetHeight;
        slider.style.transform = `translateY(-${index * slideHeight}px)`;
    }

    
    navLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            goToSlide(index);
        });
    });

   
    window.addEventListener("wheel", function (event) {
        if (isScrolling) return; 

        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 800);
        if (event.deltaY > 0) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(currentIndex - 1); 
        }

        event.preventDefault(); 
    }, { passive: false });
});
