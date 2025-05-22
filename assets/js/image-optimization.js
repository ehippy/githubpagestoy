/**
 * Image Optimization Utilities
 * 
 * This script provides utilities for optimizing images on the client side:
 * 1. Lazy loading images that are off-screen
 * 2. Responsive image loading based on viewport size
 * 3. Progressive image loading (blur-up technique)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Lazy Loading Implementation
  const lazyLoadImages = () => {
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
        }
        img.classList.add('lazy-loaded');
      });
    } else {
      // Fallback to IntersectionObserver
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            img.classList.add('lazy-loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  };
  
  // Apply progressive image loading effect
  const setupProgressiveImages = () => {
    const progressiveImages = document.querySelectorAll('.progressive-image');
    
    progressiveImages.forEach(container => {
      const img = container.querySelector('img');
      const placeholder = container.querySelector('.placeholder');
      
      if (img && placeholder) {
        // When the main image loads, fade out the placeholder
        img.onload = () => {
          placeholder.style.opacity = 0;
          img.style.opacity = 1;
        };
        
        // If the image is already cached, trigger the onload handler
        if (img.complete) {
          img.onload();
        }
      }
    });
  };
  
  // Initialize image optimizations
  lazyLoadImages();
  setupProgressiveImages();
  
  // Update image optimizations on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      lazyLoadImages();
    }, 100);
  });
});

// Helper function to convert regular image tags to lazy-loaded and responsive
function enhanceImages() {
  document.querySelectorAll('img:not([data-src]):not(.no-enhance)').forEach(img => {
    // Skip SVGs and already processed images
    if (img.src.endsWith('.svg') || img.classList.contains('lazy-loaded')) {
      return;
    }
    
    // Save original src
    img.dataset.src = img.src;
    
    // Create placeholder if it's a featured image
    if (img.classList.contains('featured-card-image') || 
        img.parentElement.classList.contains('post-hero-image')) {
      const parent = img.parentElement;
      
      // Create low-quality placeholder version
      const placeholder = document.createElement('div');
      placeholder.classList.add('placeholder');
      placeholder.style.backgroundImage = `url(${img.src}?width=50)`;
      
      // Wrap in progressive container
      const container = document.createElement('div');
      container.classList.add('progressive-image');
      
      // Rearrange DOM
      parent.insertBefore(container, img);
      container.appendChild(placeholder);
      container.appendChild(img);
      
      // Initially hide the main image
      img.style.opacity = 0;
    }
    
    // Set empty src to trigger lazy loading
    img.removeAttribute('src');
  });
}

// Call enhance images when the DOM is ready
document.addEventListener('DOMContentLoaded', enhanceImages);
