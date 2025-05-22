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
    themeToggle.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
      
      // Update text
      themeToggle.textContent = isDarkMode ? 'Light' : 'Dark';
    });
    
    // Check for saved theme preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if(savedDarkMode) {
      document.body.classList.add('dark-mode');
      themeToggle.textContent = 'Light';
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
    quoteElement.textContent = randomQuote;
  }
});
