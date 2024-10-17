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

















