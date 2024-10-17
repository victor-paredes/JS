document.addEventListener("DOMContentLoaded", function () {
    const typeTextElements = document.querySelectorAll('.type_text');
    
    typeTextElements.forEach(element => {
        const text = element.textContent;
        element.textContent = ''; // Clear the original text
        
        // Create a span for each letter to apply individual styles
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = 0; // Start with transparent
            element.appendChild(span);
        }
        
        const spans = element.querySelectorAll('span');
        let i = 0;
        
        function showNextLetter() {
            if (i < spans.length) {
                spans[i].style.transition = 'opacity 0.5s'; // Smooth transition
                spans[i].style.opacity = 1; // Make the letter opaque
                i++;
                setTimeout(showNextLetter, 50); // Adjust the delay as needed (100ms per letter)
            }
        }
        
        showNextLetter();
    });
});






document.addEventListener("DOMContentLoaded", function() {
    var fadeInElements = document.querySelectorAll('.fade_in');
    
    fadeInElements.forEach(function(element) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s'; // Change 1s to adjust fade-in duration
        
        // Trigger the fade-in after a slight delay
        setTimeout(function() {
            element.style.opacity = 1;
        }, 600); // Delay of 100ms before fade-in starts
    });
});






















/* slider */

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicators = document.querySelector('.slider-indicators');

let currentIndex = 0;
const totalSlides = slides.length;

// Function to create indicators (dots)
function createIndicators() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
      dot.classList.add('active');
    }
    indicators.appendChild(dot);

    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
      updateIndicators();
    });
  }
}

// Update the active dot
function updateIndicators() {
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Function to show slide with fade effect
function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  
  // Show the new slide with fade effect
  slides[index].classList.add('active');
  updateIndicators(); // Update the dots whenever the slide changes
}

// Navigation for previous and next buttons
prev.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// Initial setup
createIndicators();
showSlide(currentIndex);
