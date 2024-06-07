document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các phần tử input và danh sách gợi ý
    const inputs = document.querySelectorAll('.input-icon input'); // Lấy tất cả các input trong các phần tử có class .input-icon
    const suggestionLists = document.querySelectorAll('.suggestions'); // Lấy tất cả các danh sách gợi ý có class .suggestions

    inputs.forEach(input => {
        // Thêm sự kiện focus cho mỗi input
        input.addEventListener('focus', function() {
            // Ẩn tất cả các danh sách gợi ý
            suggestionLists.forEach(list => list.style.display = 'none');
            
            // Hiển thị danh sách gợi ý liên quan đến input đang được focus
            const relatedList = this.nextElementSibling; // Lấy phần tử tiếp theo sau input hiện tại
            if (relatedList && relatedList.classList.contains('suggestions')) {
                relatedList.style.display = 'block'; // Hiển thị danh sách gợi ý liên quan
            }
        });

        // Thêm sự kiện input (nhập liệu) cho mỗi input
        input.addEventListener('input', function() {
            // Ẩn tất cả các danh sách gợi ý
            suggestionLists.forEach(list => list.style.display = 'none');
            
            // Hiển thị danh sách gợi ý liên quan đến input đang nhập liệu
            const relatedList = this.nextElementSibling; // Lấy phần tử tiếp theo sau input hiện tại
            if (relatedList && relatedList.classList.contains('suggestions')) {
                relatedList.style.display = 'block'; // Hiển thị danh sách gợi ý liên quan
            }
        });
    });

    // Ẩn danh sách gợi ý khi click bên ngoài
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.input-icon')) { // Nếu click bên ngoài vùng .input-icon
            suggestionLists.forEach(list => list.style.display = 'none'); // Ẩn tất cả các danh sách gợi ý
        }
    });

    // Thêm sự kiện click cho từng mục gợi ý
    suggestionLists.forEach(list => {
        list.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI') { // Nếu click vào mục gợi ý (thẻ li)
                const input = this.previousElementSibling; // Lấy input liền trước danh sách gợi ý
                if (input) {
                    input.value = e.target.textContent; // Cập nhật giá trị của input với nội dung của mục gợi ý
                }
                this.style.display = 'none'; // Ẩn danh sách gợi ý
            }
        });
    });
});
