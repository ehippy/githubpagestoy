// Retro Cursor Trail Effect
document.addEventListener('DOMContentLoaded', function() {
  const cursorTrailContainer = document.createElement('div');
  cursorTrailContainer.className = 'cursor-trail-container';
  document.body.appendChild(cursorTrailContainer);
  
  const colors = [
    'rgba(255, 0, 255, 0.8)', // Hot pink
    'rgba(0, 255, 255, 0.8)',  // Cyan
    'rgba(255, 255, 0, 0.8)'   // Yellow
  ];
  
  const trailCount = 10;
  const trailElements = [];
  
  // Create trail elements
  for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.width = `${8 - (i * 0.5)}px`;
    trail.style.height = `${8 - (i * 0.5)}px`;
    trail.style.backgroundColor = colors[i % colors.length];
    trail.style.opacity = 1 - (i * 0.1);
    cursorTrailContainer.appendChild(trail);
    trailElements.push({
      element: trail,
      x: 0,
      y: 0
    });
  }
  
  // Add VHS tracking effect element
  const vhsTracking = document.createElement('div');
  vhsTracking.className = 'vhs-tracking';
  document.body.appendChild(vhsTracking);
  
  // Trigger random VHS tracking effect
  function randomTracking() {
    vhsTracking.classList.add('active');
    setTimeout(() => {
      vhsTracking.classList.remove('active');
    }, 300);
    
    // Schedule next tracking effect
    const nextTime = 5000 + Math.random() * 10000; // Between 5 and 15 seconds
    setTimeout(randomTracking, nextTime);
  }
  
  // Start random tracking effects
  setTimeout(randomTracking, 5000);
  
  // Mouse move event
  document.addEventListener('mousemove', function(e) {
    // Update first trail element position immediately
    trailElements[0].x = e.clientX;
    trailElements[0].y = e.clientY;
  });
  
  // Animation loop
  function animateTrail() {
    // Update first element
    trailElements[0].element.style.left = `${trailElements[0].x}px`;
    trailElements[0].element.style.top = `${trailElements[0].y}px`;
    
    // Update following elements with delay
    for (let i = 1; i < trailElements.length; i++) {
      trailElements[i].x += (trailElements[i-1].x - trailElements[i].x) * 0.3;
      trailElements[i].y += (trailElements[i-1].y - trailElements[i].y) * 0.3;
      trailElements[i].element.style.left = `${trailElements[i].x}px`;
      trailElements[i].element.style.top = `${trailElements[i].y}px`;
    }
    
    requestAnimationFrame(animateTrail);
  }
  
  animateTrail();
  
  // VHS Scanline effect intensity control
  const scanlineToggle = document.createElement('div');
  scanlineToggle.className = 'scanline-toggle';
  scanlineToggle.innerHTML = '<span>SCANLINES</span><button class="toggle-btn">ON</button>';
  document.body.appendChild(scanlineToggle);
  
  const toggleBtn = document.querySelector('.toggle-btn');
  let scanlinesActive = true;
  
  toggleBtn.addEventListener('click', function() {
    scanlinesActive = !scanlinesActive;
    if (scanlinesActive) {
      document.body.classList.remove('scanlines-off');
      toggleBtn.textContent = 'ON';
    } else {
      document.body.classList.add('scanlines-off');
      toggleBtn.textContent = 'OFF';
    }
  });

  // CRT power button effect
  const powerButton = document.createElement('div');
  powerButton.className = 'power-button';
  powerButton.innerHTML = '<div class="power-icon"></div>';
  document.body.appendChild(powerButton);

  powerButton.addEventListener('click', function() {
    document.body.classList.toggle('power-off');
    setTimeout(() => {
      if (document.body.classList.contains('power-off')) {
        document.body.classList.add('screen-off');
      } else {
        document.body.classList.remove('screen-off');
      }
    }, 100);
  });

  // Glitch effect on headers when hovering
  const headers = document.querySelectorAll('h1, h2, h3');
  headers.forEach(header => {
    header.addEventListener('mouseover', function() {
      this.classList.add('glitch-effect');
    });
    
    header.addEventListener('mouseout', function() {
      this.classList.remove('glitch-effect');
    });
  });

  // Add "Press Start" effect to home page
  if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html')) {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      const pressStart = document.createElement('div');
      pressStart.className = 'press-start';
      pressStart.innerHTML = 'PRESS START';
      heroSection.appendChild(pressStart);
      
      // Blink effect
      setInterval(() => {
        pressStart.classList.toggle('blink');
      }, 800);
      
      // Click anywhere to "start"
      document.addEventListener('click', function startHandler() {
        pressStart.remove();
        heroSection.classList.add('started');
        document.removeEventListener('click', startHandler);
      }, { once: true });
    }
  }
});

// Audio effects
document.addEventListener('DOMContentLoaded', function() {
  // Create audio elements
  const hoverSound = new Audio();
  hoverSound.src = '/githubpagestoy/assets/sounds/hover.mp3';
  hoverSound.volume = 0.3;
  
  const clickSound = new Audio();
  clickSound.src = '/githubpagestoy/assets/sounds/click.mp3';
  clickSound.volume = 0.5;
  
  // Add hover sound to buttons and links
  const interactiveElements = document.querySelectorAll('a, .button');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', function() {
      hoverSound.currentTime = 0;
      hoverSound.play().catch(e => console.log('Audio play failed:', e));
    });
    
    el.addEventListener('click', function() {
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.log('Audio play failed:', e));
    });
  });
});
