// Lấy phần tử mũi tên trái, mũi tên phải và carousel (vùng chứa các thẻ div)
const leftArrow = document.getElementById('left'); // Lấy phần tử mũi tên trái
const rightArrow = document.getElementById('right'); // Lấy phần tử mũi tên phải
const carousel = document.querySelector('.list-card'); // Lấy phần tử carousel chứa các thẻ div

// Thêm sự kiện click cho mũi tên phải
rightArrow.addEventListener('click', () => {
    // Tính toán số thẻ div hiển thị trên mỗi trang
    const visibleCards = Math.floor(carousel.offsetWidth / 290); // 290 là chiều rộng của mỗi thẻ div
    // Cuộn carousel sang phải bằng chiều rộng của một trang thẻ div
    carousel.scrollBy({ left: carousel.offsetWidth / visibleCards, behavior: 'smooth' }); // Cuộn carousel sang phải với hành vi cuộn mượt mà
});

// Thêm sự kiện click cho mũi tên trái
leftArrow.addEventListener('click', () => {
    // Tính toán số thẻ div hiển thị trên mỗi trang
    const visibleCards = Math.floor(carousel.offsetWidth / 290); // 290 là chiều rộng của mỗi thẻ div
    // Cuộn carousel sang trái bằng chiều rộng của một trang thẻ div
    carousel.scrollBy({ left: -carousel.offsetWidth / visibleCards, behavior: 'smooth' }); // Cuộn carousel sang trái với hành vi cuộn mượt mà
});
