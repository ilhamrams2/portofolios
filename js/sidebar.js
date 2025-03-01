document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar-nav");
    const toggleButton = document.getElementById("toggleSidebar");
    const closeButton = document.querySelector(".header-nav img");

    toggleButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah event merambat ke `document`
        sidebar.classList.toggle("open");
    });

    closeButton.addEventListener("click", function (event) {
        event.stopPropagation();
        sidebar.classList.remove("open");
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.remove("open");
        }
    });
});
