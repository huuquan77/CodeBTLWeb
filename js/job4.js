document.addEventListener("DOMContentLoaded", function() {
    let currentPage = 1;
    const totalPages = 3;

    const currentPageElement = document.getElementById("current-page-tt");
    const pages = document.querySelectorAll(".TopCV1-pages");

    document.getElementById("left2").addEventListener("click", function() {
        if (currentPage > 1) {
            pages[currentPage - 1].style.display = "none";
            currentPage--;
            pages[currentPage - 1].style.display = "block";
            currentPageElement.textContent = currentPage;
        }
    });

    document.getElementById("right2").addEventListener("click", function() {
        if (currentPage < totalPages) {
            pages[currentPage - 1].style.display = "none";
            currentPage++;
            pages[currentPage - 1].style.display = "block";
            currentPageElement.textContent = currentPage;
        }
    });
});
