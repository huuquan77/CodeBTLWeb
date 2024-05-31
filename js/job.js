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
            carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });

            // If at the end of the carousel, scroll back to start
            if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
                setTimeout(() => {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                }, 3000); // 3 seconds delay before resetting to the start
            }
        }

        // Auto scroll every 3 seconds
        setInterval(autoScroll, 3000);