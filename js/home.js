const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const carousel = document.querySelector('.carousel');

rightArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
});

function autoScroll() {
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        // If at the end of the carousel, scroll back to start immediately
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        // Otherwise, scroll to the next image
        carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
    }
}

// Auto scroll every 3 seconds
setInterval(autoScroll, 3000);
