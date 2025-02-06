document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        toggleButton.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
});
