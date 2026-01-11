 const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      menuToggle.classList.toggle("open");
      mobileMenu.classList.toggle("hidden");

    });

    // Dark mode toggle
    const themeToggle = document.getElementById("theme-toggle");
    
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
   

      themeToggle.textContent = document.body.classList.contains("dark-theme")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });