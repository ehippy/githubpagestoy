/**
 * Site functionality for AI Perspectives
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
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Animated entrance for cards
  const animateCards = () => {
    const cards = document.querySelectorAll('.card, .post-card, .topic-card, .featured-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    cards.forEach(card => {
      card.classList.add('animate-on-scroll');
      observer.observe(card);
    });
  };
  
  // Initialize card animations
  animateCards();
  
  // AI-related quotes for the footer
  const aiQuotes = [
    "The development of full artificial intelligence could spell the end of the human race. - Stephen Hawking",
    "AI is likely to be either the best or worst thing to happen to humanity. - Stephen Hawking",
    "Artificial intelligence is the future, not only for Russia, but for all humankind. - Vladimir Putin",
    "The rise of powerful AI will be either the best or the worst thing ever to happen to humanity. We do not yet know which. - Stephen Hawking",
    "By far, the greatest danger of Artificial Intelligence is that people conclude too early that they understand it. - Eliezer Yudkowsky",
    "Artificial intelligence will reach human levels by around 2029. - Ray Kurzweil",
    "The key to artificial intelligence has always been the representation. - Jeff Hawkins",
    "Some people call this artificial intelligence, but the reality is this technology will enhance us. - Ginni Rometty",
    "Artificial intelligence is growing up fast, as are robots whose facial expressions can elicit empathy and make your mirror neurons quiver. - Diane Ackerman",
    "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim. - Edsger W. Dijkstra"
  ];
  
  // Update footer quote
  const footerQuote = document.getElementById('footer-quote');
  if (footerQuote) {
    // Set initial random quote
    footerQuote.textContent = aiQuotes[Math.floor(Math.random() * aiQuotes.length)];
    
    // Change quote every 20 seconds
    setInterval(() => {
      footerQuote.style.opacity = 0;
      setTimeout(() => {
        footerQuote.textContent = aiQuotes[Math.floor(Math.random() * aiQuotes.length)];
        footerQuote.style.opacity = 1;
      }, 500);
    }, 20000);
  }
});
