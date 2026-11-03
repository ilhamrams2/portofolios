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

    // Smart Fixed Navbar: Hide on scroll down, show on slight scroll up
    const navbar = document.getElementById("navbar");
    let lastScrollY = window.scrollY;

    if (navbar) {
        window.addEventListener(
            "scroll",
            function () {
                const currentScrollY = window.scrollY;

                if (currentScrollY > 20) {
                    navbar.classList.add("navbar-scrolled");
                } else {
                    navbar.classList.remove("navbar-scrolled");
                }

                if (currentScrollY <= 60) {
                    navbar.classList.remove("navbar-hidden");
                } else if (currentScrollY > lastScrollY + 5 && (!sidebar || !sidebar.classList.contains("open"))) {
                    navbar.classList.add("navbar-hidden");
                } else if (currentScrollY < lastScrollY - 3) {
                    navbar.classList.remove("navbar-hidden");
                }

                lastScrollY = currentScrollY;
            },
            { passive: true }
        );
    }
});
