  const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      html.classList.add('dark');
      themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      const isDark = html.classList.contains('dark');
      themeIcon.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
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