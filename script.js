document.addEventListener("DOMContentLoaded", function() {
    const toggleIcon = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (!toggleIcon) {
        console.error("Dark mode toggle icon not found!");
        return;
    }

    // Check localStorage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleIcon.innerHTML = "☀️"; // Change to Sun for Light Mode
    }

    // Toggle Dark Mode on Click
    toggleIcon.addEventListener("click", function() {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            toggleIcon.innerHTML = "🌙"; // Moon for Dark Mode
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            toggleIcon.innerHTML = "☀️"; // Sun for Light Mode
        }
    });

    // Change Background Gradient Dynamically
    function updateBackground() {
        if (body.classList.contains("dark-mode")) {
            body.style.background = "linear-gradient(to right, #1a1a2e, #16213e)"; // Dark Mode Gradient
        } else {
            body.style.background = "linear-gradient(to right, #f8f9fa, #dbeafe)"; // Light Mode Gradient
        }
    }

    // Call function on load & toggle
    updateBackground();
    toggleIcon.addEventListener("click", updateBackground);
});
