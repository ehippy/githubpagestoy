// Matrix code rain effect
document.addEventListener('DOMContentLoaded', function() {
  // Create matrix canvas element
  const matrixContainer = document.createElement('div');
  matrixContainer.className = 'matrix-animation';
  const canvas = document.createElement('canvas');
  matrixContainer.appendChild(canvas);
  document.body.insertBefore(matrixContainer, document.body.firstChild);
  
  // Set canvas dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Get canvas context
  const ctx = canvas.getContext('2d');
  
  // Character set for matrix rain
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,./<>?~`abcdefghijklmnopqrstuvwxyz";
  
  // Calculate number of columns
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  
  // Array to track the Y position of each drop
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -100); // Random starting position above viewport
  }
  
  // Draw the matrix rain
  function drawMatrix() {
    // Semi-transparent black to create fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Green text
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';
    
    // Loop through drops
    for (let i = 0; i < drops.length; i++) {
      // Random character
      const char = chars[Math.floor(Math.random() * chars.length)];
      
      // Position and draw
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      
      // Random opacity for more dynamic effect
      ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.5 + 0.5})`;
      
      // Draw character
      ctx.fillText(char, x, y);
      
      // Move drop and reset if off screen
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      drops[i]++;
    }
  }
  
  // Run animation
  setInterval(drawMatrix, 50);
  
  // Resize handler
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Recalculate columns
    const columns = Math.floor(canvas.width / fontSize);
    
    // Reset drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height/fontSize);
    }
  });
  
  // Replace 'Home' and 'About' with hacker equivalents
  document.querySelectorAll('nav a').forEach(link => {
    if (link.textContent.includes('Home')) {
      link.innerHTML = link.innerHTML.replace('Home', 'R00T');
    } else if (link.textContent.includes('About')) {
      link.innerHTML = link.innerHTML.replace('About', '0WNED');
    } else if (link.textContent.includes('Arcade')) {
      link.innerHTML = link.innerHTML.replace('Arcade', 'W4RG4MES');
    }
  });
  
  // Add typing effect to headings
  const pageTitle = document.querySelector('main h1');
  if (pageTitle) {
    pageTitle.classList.add('typing-effect');
  }
  
  // Add CRT flicker effect
  document.body.classList.add('crt-flicker');
  
  // Change footer quote to hacker quotes
  const hackerQuotes = [
    "The quieter you become, the more you can hear.",
    "There is no security, only varying levels of insecurity.",
    "Knowledge is free.",
    "Trust no one. Question everything.",
    "Information wants to be free.",
    "Never trust the system.",
    "Hack the planet!",
    "There's no place like 127.0.0.1",
    "In a world of ones and zeros, you are the glitch.",
    "We are Legion. We do not forgive. We do not forget. Expect us."
  ];
  
  const quoteElement = document.getElementById('eighties-quote');
  if (quoteElement) {
    const randomQuote = hackerQuotes[Math.floor(Math.random() * hackerQuotes.length)];
    quoteElement.textContent = randomQuote;
  }
  
  // Add glitching effect to images
  document.querySelectorAll('img').forEach(img => {
    img.classList.add('glitch-image');
    
    img.addEventListener('mouseover', function() {
      this.style.animation = 'glitch 0.3s infinite';
    });
    
    img.addEventListener('mouseout', function() {
      this.style.animation = '';
    });
  });
  
  // Add typing terminal effect to CTA buttons
  document.querySelectorAll('.button').forEach(button => {
    const originalText = button.textContent;
    
    button.addEventListener('mouseover', function() {
      let typingText = '';
      const textLength = originalText.length;
      let index = 0;
      
      function typeText() {
        if (index < textLength) {
          typingText += originalText.charAt(index);
          button.textContent = typingText + '_';
          index++;
          setTimeout(typeText, 30);
        } else {
          button.textContent = originalText;
        }
      }
      
      // Only start effect if not already typing
      if (!button.classList.contains('typing')) {
        button.classList.add('typing');
        button.textContent = '_';
        setTimeout(typeText, 100);
      }
    });
    
    button.addEventListener('mouseout', function() {
      button.classList.remove('typing');
      button.textContent = originalText;
    });
  });
});
