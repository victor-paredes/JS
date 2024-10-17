

//slider

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
