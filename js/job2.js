document.addEventListener("DOMContentLoaded", function() {
    // Khai báo biến trang hiện tại và tổng số trang
    let currentPage = 1; // Trang hiện tại bắt đầu từ 1
    const totalPages = 5; // Tổng số trang là 5

    // Lấy phần tử hiển thị trang hiện tại và các phần tử trang
    const currentPageElement = document.getElementById("current-page"); // Lấy phần tử hiển thị số trang hiện tại
    const pages = document.querySelectorAll(".TopCV-pages"); // Lấy tất cả các phần tử trang

    // Thêm sự kiện click cho nút mũi tên trái
    document.getElementById("left1").addEventListener("click", function() {
        // Kiểm tra xem có phải trang đầu tiên không
        if (currentPage > 1) { // Nếu không phải trang đầu tiên
            // Ẩn trang hiện tại
            pages[currentPage - 1].style.display = "none"; // Ẩn trang hiện tại
            // Giảm số trang hiện tại
            currentPage--; // Giảm biến currentPage đi 1
            // Hiển thị trang mới
            pages[currentPage - 1].style.display = "block"; // Hiển thị trang mới
            // Cập nhật số trang hiện tại trong phần tử hiển thị
            currentPageElement.textContent = currentPage; // Cập nhật số trang hiện tại
        }
    });

    // Thêm sự kiện click cho nút mũi tên phải
    document.getElementById("right1").addEventListener("click", function() {
        // Kiểm tra xem có phải trang cuối cùng không
        if (currentPage < totalPages) { // Nếu không phải trang cuối cùng
            // Ẩn trang hiện tại
            pages[currentPage - 1].style.display = "none"; // Ẩn trang hiện tại
            // Tăng số trang hiện tại
            currentPage++; // Tăng biến currentPage lên 1
            // Hiển thị trang mới
            pages[currentPage - 1].style.display = "block"; // Hiển thị trang mới
            // Cập nhật số trang hiện tại trong phần tử hiển thị
            currentPageElement.textContent = currentPage; // Cập nhật số trang hiện tại
        }
    });
});

