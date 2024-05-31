const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const carousel = document.querySelector('.list-card');

rightArrow.addEventListener('click', () => {
    const visibleCards = Math.floor(carousel.offsetWidth / 290); // Số thẻ div hiển thị trên mỗi trang
    carousel.scrollBy({ left: carousel.offsetWidth / visibleCards, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
    const visibleCards = Math.floor(carousel.offsetWidth / 290); // Số thẻ div hiển thị trên mỗi trang
    carousel.scrollBy({ left: -carousel.offsetWidth / visibleCards, behavior: 'smooth' });
});
