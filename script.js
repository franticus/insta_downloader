// Initialize AOS
AOS.init({
  duration: 1000, // Default duration for all animations
  once: true, // Animation triggers only once
});

// Placeholder for download functionality
document.querySelector('.download-btn').addEventListener('click', () => {
  const url = document.querySelector('input').value;
  if (url) {
    alert('Place for redirecting to download page');
  } else {
    alert('Please paste a video link first!');
  }
});
