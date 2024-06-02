document.addEventListener("DOMContentLoaded", function() {
    let currentPage = 1;
    const totalPages = 5;

    const currentPageElement = document.getElementById("current-page");
    const pages = document.querySelectorAll(".TopCV-pages");

    document.getElementById("left1").addEventListener("click", function() {
        if (currentPage > 1) {
            pages[currentPage - 1].style.display = "none";
            currentPage--;
            pages[currentPage - 1].style.display = "block";
            currentPageElement.textContent = currentPage;
        }
    });

    document.getElementById("right1").addEventListener("click", function() {
        if (currentPage < totalPages) {
            pages[currentPage - 1].style.display = "none";
            currentPage++;
            pages[currentPage - 1].style.display = "block";
            currentPageElement.textContent = currentPage;
        }
    });
});
