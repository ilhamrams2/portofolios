document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector(".back-to-top");
    const landingSection = document.querySelector("#landing");

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            backToTop.style.opacity = "0";
            backToTop.style.visibility = "hidden";
        } else {
            backToTop.style.opacity = "1";
            backToTop.style.visibility = "visible";
        }
    }, { threshold: 1 }); // Hilang jika 30% dari #landing terlihat

    if (landingSection) {
        observer.observe(landingSection);
    }
});