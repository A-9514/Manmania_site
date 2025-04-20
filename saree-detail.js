document.addEventListener('DOMContentLoaded', () => {

    // --- Star Rating ---
    const starsContainer = document.querySelector('.star-rating .stars');
    const ratingInput = document.getElementById('ratingValue');
    const ratingFeedbackSpan = document.getElementById('ratingFeedbackText'); // Get the feedback span

    // Define feedback messages
    const ratingMap = {
        1: "Poor",
        2: "Fair",
        3: "Good",
        4: "Very Good!",
        5: "Excellent!"
    };

    if (starsContainer && ratingInput && ratingFeedbackSpan) { 
        const stars = starsContainer.querySelectorAll('i');

        // Function to update stars AND feedback text based on a value
        function updateRatingDisplay(value) {
            const ratingValue = parseInt(value) || 0; // Ensure it's a number

            // Update visual stars
            stars.forEach(star => {
                const starValue = parseInt(star.getAttribute('data-value'));
                if (starValue <= ratingValue) {
                    star.classList.add('selected'); // Keep selected state
                    star.classList.remove('far');
                    star.classList.add('fas');    // Make it solid
                } else {
                    star.classList.remove('selected');
                    star.classList.remove('fas');
                    star.classList.add('far');     // Make it regular outline
                }
            });

            // Update feedback text
            if (ratingValue > 0 && ratingMap[ratingValue]) {
                ratingFeedbackSpan.textContent = ratingMap[ratingValue];
                ratingFeedbackSpan.style.display = 'inline-block'; // Show the span
            } else {
                ratingFeedbackSpan.textContent = '';          // Clear text
                ratingFeedbackSpan.style.display = 'none';    // Hide the span
            }
        }

        // Mouseover effect - Show temporary state
        stars.forEach(star => {
            star.addEventListener('mouseover', () => {
                const hoverValue = star.getAttribute('data-value');
                updateRatingDisplay(hoverValue); // Temporarily update display
            });

            // Mouseout effect - Revert to the actual selected rating
            star.addEventListener('mouseout', () => {
                updateRatingDisplay(ratingInput.value); // Revert to saved value
            });

            // Click effect - Set the rating permanently (until changed)
            star.addEventListener('click', () => {
                const clickedValue = star.getAttribute('data-value');
                ratingInput.value = clickedValue; // Set hidden input value
                updateRatingDisplay(clickedValue); // Update display to reflect click
                console.log('Rating set to:', clickedValue);
            });
        });

        // Initial state on load (in case the form is pre-filled, e.g., on edit)
        updateRatingDisplay(ratingInput.value);

    } // End star rating elements check

    // --- Review Form Submission ---
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // ... (validation logic remains the same) ...

            // ** SIMULATE SENDING DATA **
             console.log(`Submitting Review for ${sareeId}: Rating=${ratingInput.value}, Review=${document.getElementById('reviewText').value}`);


             // --- Display Confirmation & Reset ---
             alert('Thank you for your review!');

             // Add review to page demo (keep existing logic)
             // ...

             // Reset the form
             reviewForm.reset();
             ratingInput.value = '0'; // Reset hidden input value

             // Reset visual stars AND feedback text
             updateRatingDisplay(0);


        });
    } // End reviewForm check


}); // End DOMContentLoaded