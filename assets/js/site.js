/**
 * Minimal site functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
  }
  
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      themeToggle.textContent = 'Light';
    }
    
    themeToggle.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
      themeToggle.textContent = isDarkMode ? 'Light' : 'Dark';
    });
  }
  
  // Footer quotes
  const quotes = [
    "Simplicity is the ultimate sophistication.",
    "Less is more.",
    "Design is not just what it looks like. Design is how it works.",
    "Good design is obvious. Great design is transparent."
  ];
  
  const quoteElement = document.getElementById('footer-quote');
  if (quoteElement) {
    quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  }
});
