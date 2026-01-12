const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.getElementById('hamburgerIcon');

    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // Toggle icon between hamburger and X
      if (mobileMenu.classList.contains('hidden')) {
        hamburgerIcon.className = 'fas fa-bars';
      } else {
        hamburgerIcon.className = 'fas fa-times';
      }
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.className = 'fas fa-bars';
      });
    });

    // Theme Toggle - Desktop
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      themeIcon.textContent = isDark ? '☀️' : '🌙';
      themeIconMobile.textContent = isDark ? '☀️' : '🌙';
    });

    // Theme Toggle - Mobile
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    const themeIconMobile = document.getElementById('themeIconMobile');
    
    themeToggleMobile.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      themeIcon.textContent = isDark ? '☀️' : '🌙';
      themeIconMobile.textContent = isDark ? '☀️' : '🌙';
    });
    // Typing Effect
    const typingText = document.getElementById('typingText');
    const text = 'We Build Digital Experiences';
    let index = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
      if (!isDeleting && index <= text.length) {
        typingText.textContent = text.substring(0, index);
        index++;
        setTimeout(type, typeSpeed);
      } else if (!isDeleting && index > text.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && index > 0) {
        typingText.textContent = text.substring(0, index);
        index--;
        setTimeout(type, 50);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTimeout(type, 500);
      }
    }

    type();