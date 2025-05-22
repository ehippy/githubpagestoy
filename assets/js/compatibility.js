/**
 * Cross-browser compatibility polyfills and helpers
 */

// IntersectionObserver fallback for older browsers
if (!('IntersectionObserver' in window)) {
  // Simple polyfill - just show all elements immediately
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-on-scroll').forEach(elem => {
      elem.classList.add('visible');
    });
  });
}

// Feature detection and warnings
(function() {
  const warnings = [];
  
  // Check for CSS Grid support
  if (!CSS.supports('display', 'grid')) {
    warnings.push('Your browser has limited support for modern CSS features. The site may not look as intended.');
  }
  
  // Check for localStorage (needed for theme preference)
  let storageAvailable = false;
  try {
    storageAvailable = 'localStorage' in window && window.localStorage !== null;
    const testKey = '__test_storage__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
  } catch (e) {
    storageAvailable = false;
  }
  
  if (!storageAvailable) {
    warnings.push('Local storage is not available. Theme preferences will not be saved between visits.');
    
    // Define a polyfill for localStorage
    window.localStorage = {
      _data: {},
      setItem: function(id, val) { this._data[id] = String(val); },
      getItem: function(id) { return this._data.hasOwnProperty(id) ? this._data[id] : null; },
      removeItem: function(id) { delete this._data[id]; },
      clear: function() { this._data = {}; }
    };
  }
  
  // Display warnings if needed
  if (warnings.length > 0) {
    console.warn('Browser compatibility warnings:', warnings);
  }
})();
