document.addEventListener("DOMContentLoaded", function () {
  
  // Custom Cursor Logic
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorRing = document.querySelector('.custom-cursor-ring');
  
  window.addEventListener('mousemove', (e) => {
    if(cursorDot && cursorRing) {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
      
      // Slight delay for ring
      setTimeout(() => {
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
      }, 50);
    }
  });

  // Settings Panel Logic
  const toggleBtn = document.getElementById('theme-settings-toggle');
  const panel = document.getElementById('theme-settings-panel');
  const closeBtn = document.getElementById('theme-settings-close');
  const applyBtn = document.getElementById('theme-settings-apply');
  const colorPicker = document.getElementById('theme-color-picker');
  const cursorPicker = document.getElementById('cursor-style-picker');
  const modePicker = document.getElementById('theme-mode-picker');
  
  let originalColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim() || '#00e6d0';
  let originalCursor = 'advanced';
  let originalMode = 'dark';

  if (toggleBtn && panel) {
    // Load saved settings
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
      document.documentElement.style.setProperty('--main-color', savedColor);
      colorPicker.value = savedColor;
      originalColor = savedColor;
    }
    
    const savedCursor = localStorage.getItem('cursorStyle');
    if (savedCursor) {
      cursorPicker.value = savedCursor;
      originalCursor = savedCursor;
      if (savedCursor === 'simple') {
        document.body.classList.remove('custom-cursor');
      }
    }
    
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      if(modePicker) modePicker.value = savedMode;
      originalMode = savedMode;
      if (savedMode === 'light') {
        document.body.classList.add('light-mode');
      }
    }

    // Toggle Panel
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.style.display = panel.style.display === 'none' || !panel.style.display ? 'block' : 'none';
      if (panel.style.display === 'block') {
        originalColor = colorPicker.value;
        originalCursor = cursorPicker.value;
        if(modePicker) originalMode = modePicker.value;
      }
    });

    // Live color update
    colorPicker.addEventListener('input', (e) => {
      document.documentElement.style.setProperty('--main-color', e.target.value);
    });
    
    // Live mode update
    if(modePicker) {
      modePicker.addEventListener('change', (e) => {
        if (e.target.value === 'light') {
          document.body.classList.add('light-mode');
        } else {
          document.body.classList.remove('light-mode');
        }
      });
    }

    // Close button (Cancel changes if not applied)
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Revert styles to original ones
      document.documentElement.style.setProperty('--main-color', originalColor);
      colorPicker.value = originalColor;
      
      cursorPicker.value = originalCursor;
      if (originalCursor === 'simple') {
        document.body.classList.remove('custom-cursor');
      } else {
        document.body.classList.add('custom-cursor');
      }
      
      if(modePicker) modePicker.value = originalMode;
      if (originalMode === 'light') {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
      
      panel.style.display = 'none';
    });

    // Apply button (Save changes)
    applyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const newColor = colorPicker.value;
      const newCursor = cursorPicker.value;
      const newMode = modePicker ? modePicker.value : 'dark';
      
      localStorage.setItem('themeColor', newColor);
      localStorage.setItem('cursorStyle', newCursor);
      localStorage.setItem('themeMode', newMode);
      
      if (newCursor === 'simple') {
        document.body.classList.remove('custom-cursor');
      } else {
        document.body.classList.add('custom-cursor');
      }
      
      if (newMode === 'light') {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
      
      originalColor = newColor;
      originalCursor = newCursor;
      originalMode = newMode;
      panel.style.display = 'none';
    });

    // Click outside panel to close and revert
    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
        if (panel.style.display === 'block') {
          // Revert
          document.documentElement.style.setProperty('--main-color', originalColor);
          colorPicker.value = originalColor;
          
          if(cursorPicker) cursorPicker.value = originalCursor;
          if (originalCursor === 'simple') {
            document.body.classList.remove('custom-cursor');
          } else {
            document.body.classList.add('custom-cursor');
          }
          
          if(modePicker) modePicker.value = originalMode;
          if (originalMode === 'light') {
            document.body.classList.add('light-mode');
          } else {
            document.body.classList.remove('light-mode');
          }
          
          panel.style.display = 'none';
        }
      }
    });
  }

  // Scroll animations are now handled by the AOS library.

  // Projects Filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      button.classList.add("active");
      const filter = button.getAttribute("data-filter");
      projectItems.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Smooth scrolling for menu links
  document.querySelectorAll('.menu-item, .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Highlight active menu item on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY || window.pageYOffset;
    sections.forEach(section => {
      const offsetTop = section.offsetTop - 100;
      const offsetBottom = offsetTop + section.offsetHeight;
      const menuItem = document.querySelector(`.nav-link[href="#${section.id}"]`);
      if(menuItem && scrollPos >= offsetTop && scrollPos < offsetBottom) {
        document.querySelectorAll('.nav-link').forEach(i => i.classList.remove('active'));
        menuItem.classList.add('active');
      }
    });
  });

  // TYPING ANIMATION
  const typingText = document.querySelector(".typing-text");
  if (typingText) {
    const texts = ["Full Stack Developer", "Web Developer", "Node.js Expert"];
    let count = 0, index = 0, currentText = "", letter = "";
    function type() {
      if (count === texts.length) count = 0;
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      typingText.innerHTML = letter + '<span class="cursor" style="border-right: 2px solid var(--main-color); animation: blink 0.7s infinite;"></span>';
      if (letter.length === currentText.length) {
        setTimeout(() => {
          index = 0;
          count++;
          type();
        }, 2000);
      } else {
        setTimeout(type, 100);
      }
    }
    type();
  }

  // Contact Form Logic
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const btn = contactForm.querySelector('button');
      const originalText = btn.innerText;
      
      // Provide user feedback
      btn.innerText = "Sent Successfully!";
      btn.style.backgroundColor = "#28a745";
      btn.style.borderColor = "#28a745";
      btn.disabled = true;

      // Clear all form fields
      contactForm.reset();
      
      // Revert button after 3 seconds
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; // Reset to original CSS
        btn.style.borderColor = "";
        btn.disabled = false;
      }, 3000);
    });
  }

});