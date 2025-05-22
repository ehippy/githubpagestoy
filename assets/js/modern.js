/**
 * Minimal site functionality
 */
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if(menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if(themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
      
      // Update icon
      const themeIcon = document.querySelector('#theme-toggle i');
      if(themeIcon) {
        if(isDarkMode) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        } else {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
      }
    });
    
    // Check for saved theme preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if(savedDarkMode) {
      document.body.classList.add('dark-mode');
      
      const themeIcon = document.querySelector('#theme-toggle i');
      if(themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    }
  }
  
  // Simple quotes for footer
  const quotes = [
    "Simplicity is the ultimate sophistication.",
    "Less is more.",
    "Design is not just what it looks like. Design is how it works.",
    "Good design is obvious. Great design is transparent."
  ];
  
  const quoteElement = document.getElementById('footer-quote');
  if (quoteElement) {
    // Set random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = '"' + randomQuote + '"';
  }
});
  
  function updateThemeIcon(isDarkMode) {
    const themeIcon = document.querySelector('#theme-toggle i');
    if(themeIcon) {
      if(isDarkMode) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  }
  
  // Simple quotes for footer
  const quotes = [
    "Simplicity is the ultimate sophistication.",
    "Less is more.",
    "Design is not just what it looks like. Design is how it works.",
    "Good design is obvious. Great design is transparent."
  ];
  
  const quoteElement = document.getElementById('footer-quote');
  if (quoteElement) {
    // Set random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = '"' + randomQuote + '"';
  }
});
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if(menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
  
  // Inspirational quotes for footer
  const quotes = [
    "Design is intelligence made visible.",
    "Simplicity is the ultimate sophistication.",
    "Good design is obvious. Great design is transparent.",
    "Design is not just what it looks like. Design is how it works.",
    "Less is more.",
    "Details make perfection, and perfection is not a detail.",
    "Creativity is intelligence having fun.",
    "Innovation distinguishes between a leader and a follower.",
    "The best way to predict the future is to create it.",
    "Simplicity is about subtracting the obvious and adding the meaningful."
  ];
  
  const quoteElement = document.getElementById('footer-quote');
  if (quoteElement) {
    // Set random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = '"' + randomQuote + '"';
  }
});

// Theme switcher for light and dark mode (optional)
const themeToggle = document.getElementById('theme-toggle');
if(themeToggle) {
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeIcon(isDarkMode);
  });
  
  // Check for saved theme preference
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if(savedDarkMode) {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
  }
}

function updateThemeIcon(isDarkMode) {
  const themeIcon = document.querySelector('#theme-toggle i');
  if(themeIcon) {
    if(isDarkMode) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }
}
