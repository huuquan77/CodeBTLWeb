document.addEventListener("DOMContentLoaded", function() {
    // Khai báo biến trang hiện tại và tổng số trang
    let currentPage = 1;
    const totalPages = 5;

    // Lấy phần tử hiển thị trang hiện tại và các phần tử trang
    const currentPageElement = document.getElementById("current-page");
    const pages = document.querySelectorAll(".TopCV-pages");

    // Thêm sự kiện click cho nút mũi tên trái
    document.getElementById("left1").addEventListener("click", function() {
        // Kiểm tra xem có phải trang đầu tiên không
        if (currentPage > 1) {
            // Ẩn trang hiện tại
            pages[currentPage - 1].style.display = "none";
            // Giảm số trang hiện tại
            currentPage--;
            // Hiển thị trang mới
            pages[currentPage - 1].style.display = "block";
            // Cập nhật số trang hiện tại trong phần tử hiển thị
            currentPageElement.textContent = currentPage;
        }
    });

    // Thêm sự kiện click cho nút mũi tên phải
    document.getElementById("right1").addEventListener("click", function() {
        // Kiểm tra xem có phải trang cuối cùng không
        if (currentPage < totalPages) {
            // Ẩn trang hiện tại
            pages[currentPage - 1].style.display = "none";
            // Tăng số trang hiện tại
            currentPage++;
            // Hiển thị trang mới
            pages[currentPage - 1].style.display = "block";
            // Cập nhật số trang hiện tại trong phần tử hiển thị
            currentPageElement.textContent = currentPage;
        }
    });
});
