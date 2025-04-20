const sareeDatabase = [
    // Kanjivaram Row
    {
        id: "kanji-1", // Unique ID
        title: "Regal Red Kanjivaram",
        imageUrl: "https://cliosilks.com/cdn/shop/files/DSC04421_1800x1800.jpg?v=1700922359",
        description: "Beautiful Regal Red Kanjivaram saree. Pure silk with gold zari detailing.", // Placeholder desc
        price: "$350",
        material: "Pure Silk", // Assumed from description/tags
        tags: ["Silk", "Kanjivaram", "Bridal"],
        specs: [
            { key: "Material", value: "Pure Kanjivaram Silk" }, { key: "Weave", value: "Handloom" },
            { key: "Occasion", value: "Wedding, Festive" }, { key: "Care", value: "Dry Clean Only" }
        ] // Basic Placeholder Specs
    },
    {
        id: "kanji-2",
        title: "Azure Blue Kanjivaram",
        imageUrl: "https://reewazinternational.com/wp-content/uploads/formidable/6/10361-RICH-PALLU-FANCY-ETHNIC-SOFT-KANCHIVARAM-SILK-SAREES-COLLECTION-BY-REEWAZ-3-1.jpeg",
        description: "Elegant Azure Blue Kanjivaram saree. Features contrast border and zari.", // Placeholder desc
        price: "$380",
        material: "Pure Silk",
        tags: ["Silk", "Kanjivaram", "Party Wear"],
        specs: [
            { key: "Material", value: "Pure Kanjivaram Silk" }, { key: "Weave", value: "Handloom" },
            { key: "Occasion", value: "Party, Festive" }, { key: "Care", value: "Dry Clean Only" }
        ]
    },
    {
        id: "kanji-3",
        title: "Emerald Kanjivaram",
        imageUrl: "https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/kanchivaram-green-silk-sarees-94.jpg",
        description: "Stunning Emerald Kanjivaram saree showcasing traditional motifs.", // Placeholder desc
        price: "$320",
        material: "Pure Silk",
        tags: ["Silk", "Kanjivaram", "Traditional"],
        specs: [
            { key: "Material", value: "Pure Kanjivaram Silk" }, { key: "Weave", value: "Handloom" },
            { key: "Occasion", value: "Festive, Traditional" }, { key: "Care", value: "Dry Clean Only" }
        ]
    },
    {
        id: "kanji-4",
        title: "Diamond Kanjivaram",
        imageUrl: "https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/kanchivaram-pure-heavy-organza-silk-saree-318.jpg",
        description: "Exquisite Diamond Kanjivaram silk saree with traditional motifs.", // Placeholder desc
        price: "$320",
        material: "Organza Silk", 
        tags: ["Silk", "Kanjivaram", "Organza"],
        specs: [
            { key: "Material", value: "Pure Organza Silk" }, { key: "Weave", value: "Handloom" },
            { key: "Occasion", value: "Party, Festive" }, { key: "Care", value: "Dry Clean Only" }
        ]
    },
    {
        id: "kanji-5",
        title: "Yellow Kanjivaram",
        imageUrl: "http://www.shakthistyles.com/cdn/shop/products/WhatsAppImage2022-08-17at6.22.30AM_1.jpg?v=1678728379",
        description: "Bright Yellow Kanjivaram silk saree featuring traditional motifs.", // Placeholder desc
        price: "$320",
        material: "Pure Silk",
        tags: ["Silk", "Kanjivaram", "Festive"],
        specs: [
            { key: "Material", value: "Pure Kanjivaram Silk" }, { key: "Weave", value: "Handloom" },
            { key: "Occasion", value: "Festive, Pooja" }, { key: "Care", value: "Dry Clean Only" }
        ]
    },
    // Banarasi Row
    {
        id: "bana-1",
        title: "Lush Green Banarasi",
        imageUrl: "https://cdn.exoticindia.com/images/products/original/textiles-2019/tab337-classicgreen.jpg",
        description: "Rich green Banarasi silk saree with heavy brocade work.", // Placeholder desc
        price: "$420",
        material: "Pure Silk",
        tags: ["Silk", "Banarasi", "Bridal"],
        specs: [
            { key: "Material", value: "Pure Banarasi Silk" }, { key: "Weave", value: "Handloom Brocade" },
            { key: "Occasion", value: "Wedding, Bridal" }, { key: "Care", value: "Dry Clean Only" }
        ]
    },
    {
        id: "bana-2",
        title: "Peach Banarasi Style",
        imageUrl: "https://pbs.twimg.com/media/EuQOl5CVgAgpSJX.jpg",
        description: "Festive Peach Banarasi style saree in woven art silk.", // Placeholder desc
        price: "$110",
        material: "Art Silk",
        tags: ["Art Silk", "Banarasi", "Festive"],
        specs: [
            { key: "Material", value: "Art Silk" }, { key: "Weave", value: "Powerloom" },
            { key: "Occasion", value: "Festive, Party" }, { key: "Care", value: "Dry Clean Recommended" }
        ]
    },
     {
        id: "bana-3", // Purple
        title: "Purple Banarasi Style", // Changed title
        imageUrl: "https://dvanza.com/wp-content/uploads/Stunning-Purple-Banarasi-Soft-Silk-Saree-dvz0002632.jpeg",
        description: "Stunning Purple Banarasi soft silk saree.", // Placeholder desc
        price: "$120", // Example Price
        material: "Soft Silk",
        tags: ["Silk", "Banarasi", "Soft Silk"],
        specs: [
            { key: "Material", value: "Banarasi Soft Silk" }, { key: "Weave", value: "Handloom/Powerloom" },
            { key: "Occasion", value: "Party, Festive" }, { key: "Care", value: "Dry Clean Recommended" }
        ]
    },
    {
        id: "bana-4", // Royal Blue
        title: "Royal Blue Banarasi Style",
        imageUrl: "https://www.monastoor.com/wp-content/uploads/2022/03/Royal-Blue-Katan-Silk-Saree.jpeg",
        description: "Royal Blue Katan Silk Banarasi saree.", // Placeholder desc
        price: "$150", // Example Price
        material: "Katan Silk",
        tags: ["Silk", "Banarasi", "Katan Silk"],
        specs: [
            { key: "Material", value: "Katan Silk" }, { key: "Weave", value: "Handloom" },
            { key: "Occasion", value: "Wedding, Festive" }, { key: "Care", value: "Dry Clean Only" }
        ]
    },
    // Chiffon Row
    {
        id: "chiffon-1",
        title: "Blush Pink Floral",
        imageUrl: "https://www.monastoor.com/wp-content/uploads/2022/02/Pink-Chiffon-georggette-saree-.jpeg",
        description: "Lightweight blush pink chiffon saree with floral prints.", // Placeholder desc
        price: "$85",
        material: "Chiffon Georgette",
        tags: ["Chiffon", "Floral", "Casual"],
        specs: [
            { key: "Material", value: "Chiffon Georgette" }, { key: "Print", value: "Floral" },
            { key: "Occasion", value: "Casual, Daily Wear" }, { key: "Care", value: "Gentle Hand Wash" }
        ]
    },
    {
        id: "chiffon-2",
        title: "Midnight Blue Chiffon",
        imageUrl: "https://i.pinimg.com/736x/87/34/6b/87346b64a4c4e31918680b2ed807f3d1.jpg",
        description: "Elegant navy blue chiffon saree, perfect for evening events.", // Placeholder desc
        price: "$95",
        material: "Chiffon",
        tags: ["Chiffon", "Party Wear", "Solid"],
        specs: [
            { key: "Material", value: "Chiffon" }, { key: "Color", value: "Navy Blue" },
            { key: "Occasion", value: "Party, Evening Wear" }, { key: "Care", value: "Dry Clean Recommended" }
        ]
    },
    {
        id: "chiffon-3", // Green
        title: "Midnight Green Chiffon",
        imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/11/RN/QA/AM/161111585/pattu-1000x1000.jpeg",
        description: "Elegant green chiffon saree with pattu border.", // Placeholder desc
        price: "$105", // Example Price
        material: "Chiffon",
        tags: ["Chiffon", "Party Wear", "Pattu Border"],
        specs: [
            { key: "Material", value: "Chiffon" }, { key: "Color", value: "Green" },
            { key: "Occasion", value: "Party, Festive" }, { key: "Care", value: "Dry Clean Recommended" }
        ]
    },
    // Cotton Row
    {
        id: "cotton-1",
        title: "Sky Blue Cotton",
        imageUrl: "https://i.pinimg.com/originals/91/f2/9c/91f29caae293f42e0ebd9517574939e1.jpg",
        description: "Comfortable sky blue handloom cotton saree.", // Placeholder desc
        price: "$60",
        material: "Cotton",
        tags: ["Cotton", "Handloom", "Office Wear"],
        specs: [
            { key: "Material", value: "Handloom Cotton" }, { key: "Color", value: "Sky Blue" },
            { key: "Occasion", value: "Office, Casual" }, { key: "Care", value: "Hand Wash" }
        ]
    },
    {
        id: "cotton-2",
        title: "Sunshine Yellow Cotton",
        imageUrl: "https://i.pinimg.com/736x/11/4d/0d/114d0da5956a135b75a61494a14ba638.jpg",
        description: "Soft yellow cotton saree for daily wear comfort.", // Placeholder desc
        price: "$45",
        material: "Cotton",
        tags: ["Cotton", "Casual", "Daily Wear"],
        specs: [
            { key: "Material", value: "Cotton" }, { key: "Color", value: "Yellow" },
            { key: "Occasion", value: "Daily Wear, Casual" }, { key: "Care", value: "Machine Wash Gentle" }
        ]
    },
    {
        id: "cotton-3", // Green
        title: "Sunshine Green Cotton",
        imageUrl: "https://i.pinimg.com/originals/90/45/6b/90456b2ebcc165eac52133d4361d9e99.jpg",
        description: "Refreshing green cotton saree for casual comfort.", // Placeholder desc
        price: "$50", // Example Price
        material: "Cotton",
        tags: ["Cotton", "Casual", "Daily Wear"],
        specs: [
            { key: "Material", value: "Cotton" }, { key: "Color", value: "Green" },
            { key: "Occasion", value: "Daily Wear, Casual" }, { key: "Care", value: "Machine Wash Gentle" }
        ]
    },
    {
        id: "cotton-4", // Silver/Grey
        title: "Sunshine Silver Cotton",
        imageUrl: "https://i.pinimg.com/736x/c3/91/5b/c3915bfc3d99930e85e9474295106a89.jpg",
        description: "Elegant silver-grey cotton saree for a subtle look.", // Placeholder desc
        price: "$55", // Example Price
        material: "Cotton",
        tags: ["Cotton", "Casual", "Subtle"],
        specs: [
            { key: "Material", value: "Cotton" }, { key: "Color", value: "Silver Grey" },
            { key: "Occasion", value: "Casual, Office" }, { key: "Care", value: "Hand Wash" }
        ]
    },
    // Designer Row
    {
        id: "design-1",
        title: "Golden Hour Georgette",
        imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/1/IG/UC/ND/28280455/banarasi-silk-saree-500x500.jpg",
        description: "Designer georgette saree with sequin embellishments.", // Placeholder desc
        price: "$199",
        material: "Faux Georgette",
        tags: ["Designer", "Georgette", "Party Wear"],
        specs: [
            { key: "Material", value: "Faux Georgette" }, { key: "Work", value: "Sequin Embellishments" },
            { key: "Occasion", value: "Party, Reception" }, { key: "Care", value: "Dry Clean Only" }
        ]
    },
    {
        id: "design-2",
        title: "Abstract Print Designer",
        imageUrl: "https://i.pinimg.com/originals/70/a1/ae/70a1ae3a703276af8d6d63fa219e83f1.jpg",
        description: "Modern designer saree with a unique abstract print.", // Placeholder desc
        price: "$180",
        material: "Art Silk",
        tags: ["Designer", "Modern", "Art Silk"],
        specs: [
            { key: "Material", value: "Art Silk" }, { key: "Print", value: "Abstract Digital Print" },
            { key: "Occasion", value: "Casual Party, Events" }, { key: "Care", value: "Dry Clean Recommended" }
        ]
    }
];

// --- PASTE THE REST OF YOUR script.js CODE BELOW THIS LINE ---
// document.addEventListener('DOMContentLoaded', function() {
//    // All the event listeners and detail page logic...
// });document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // --- Selectors ---
    const categoryTagsContainer = document.querySelector('.category-tags');
    const tagButtons = document.querySelectorAll('.category-tags .tag-btn');
    const allSareeRows = document.querySelectorAll('.saree-row');
    const categoryBlocks = document.querySelectorAll('.category-block'); // Select the category blocks
    const loadMoreButton = document.getElementById('load-more-btn');

    console.log("Tag Buttons Found:", tagButtons.length);
    console.log("Saree Rows Found:", allSareeRows.length);
    console.log("Category Blocks Found:", categoryBlocks.length); // Check if blocks are selected

    // --- Reusable Filtering Function ---
    function filterRowsAndSetActiveButton(targetId) {
        console.log("Filtering triggered for target:", targetId);

        if (!targetId) {
            console.error("Target ID is null or undefined.");
            return; // Exit if targetId is invalid
        }

        // 1. Update active state for top tag buttons
        tagButtons.forEach(btn => {
            const btnTarget = btn.getAttribute('data-target');
            // Activate if button's target matches the desired targetId
            // OR if the target is 'all'/'#collections-section' and the button is the 'Show All' button
             if (btnTarget === targetId || ( (targetId === 'all' || targetId === '#collections-section') && btnTarget === 'all' ) ) {
                 btn.classList.add('active');
             } else {
                 btn.classList.remove('active');
             }

             // --- Edge case handling for active state ---
             // If a specific category is targeted, ensure 'Show All' button is not active
             if (targetId !== 'all' && targetId !== '#collections-section' && btnTarget === 'all') {
                btn.classList.remove('active');
             }
             // If 'Show All' is targeted, ensure specific category buttons are not active
             if ((targetId === 'all' || targetId === '#collections-section') && btnTarget !== 'all' && btnTarget !== '#collections-section') {
                 btn.classList.remove('active');
             }
        });

        // 2. Show/hide the saree rows
        allSareeRows.forEach(row => {
            // Show all rows if target is 'all' or links to the parent section
            if (targetId === 'all' || targetId === '#collections-section') {
                row.classList.remove('hidden-row');
            } else {
                // Otherwise, show only the row whose ID matches the target
                // Make sure targetId includes the '#' if it comes from href
                const rowIdHash = '#' + row.id;
                if (rowIdHash === targetId) {
                    row.classList.remove('hidden-row');
                } else {
                    row.classList.add('hidden-row');
                }
            }
        });

    } // --- End of filterRowsAndSetActiveButton function ---


    // --- Event Listener for Top Tag Buttons ---
    if (categoryTagsContainer) {
        categoryTagsContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('tag-btn')) {
                const target = event.target.getAttribute('data-target');
                filterRowsAndSetActiveButton(target); // Call the filtering function
            }
        });
    } else {
        console.error("Category tags container '.category-tags' not found!");
    }

    // --- NEW Event Listener for Bottom Category Blocks ---
    if (categoryBlocks.length > 0) {
        categoryBlocks.forEach(block => {
            block.addEventListener('click', function(event) {
                // We don't need preventDefault() because we *want* the anchor link's default scroll behavior.
                const target = block.getAttribute('href'); // Get the href (e.g., #kanjivaram-row)
                console.log("Category block clicked! Target href:", target);
                filterRowsAndSetActiveButton(target); // Call the filtering function
                // Smooth scroll happens automatically due to the href and CSS scroll-behavior
            });
        });
    } else {
        console.warn("No category blocks '.category-block' found!"); // Warn if blocks missing
    }


    // --- Load More Button Functionality (Keep as is) ---
    console.log("Load More Button Element:", loadMoreButton);
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            console.log("Load More Button Clicked!");
            alert("More sarees coming soon!");
        });
    } else {
        console.error("Load More Button not found! Check ID 'load-more-btn'.");
    }// End of DOMContentLoaded listener

// --- Featured Saree Details Button ---
const viewDetailsButton = document.getElementById('view-details-btn');

console.log("View Details Button Element:", viewDetailsButton); // Debug log

if (viewDetailsButton) {
    viewDetailsButton.addEventListener('click', function() {
        console.log("View Details Button Clicked!"); // Debug log
        // Display the alert message
        alert("Full details for this featured saree will be available soon!");
    });
} else {
    console.error("View Details Button not found! Check ID 'view-details-btn'.");
}

// --- Newsletter Form Submission ---
const newsletterForm = document.getElementById('newsletter-form');

console.log("Newsletter Form Element:", newsletterForm); // Debug log

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual page reload
        const emailInput = document.getElementById('newsletter-email');
        console.log("Newsletter submitted! Email:", emailInput.value); // Debug log

        // Simple success alert
        alert("Thank you for subscribing!");

        // Optional: Clear the input field after submission
        if(emailInput) {
            emailInput.value = '';
        }

        // In a real application, you would send the email to your server here
        // fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: emailValue }) ... });
    });
} else {
    console.error("Newsletter Form not found! Check ID 'newsletter-form'.");
}

document.addEventListener('DOMContentLoaded', function() {
    // ... (Keep all existing code inside this listener) ...

    // --- Header Button Functionality ---
    const signInButtonHeader = document.getElementById('signin-btn-header');
    const joinNowButtonHeader = document.getElementById('joinnow-btn-header');

    console.log("Sign In Button Header:", signInButtonHeader); // Debug
    console.log("Join Now Button Header:", joinNowButtonHeader); // Debug

    if (signInButtonHeader) {
        signInButtonHeader.addEventListener('click', function() {
            console.log("Header Sign In clicked!"); // Debug
            alert("Sign in functionality would open here."); // Alert message
        });
    } else {
        console.error("Header Sign In Button not found! Check ID 'signin-btn-header'.");
    }

    if (joinNowButtonHeader) {
        joinNowButtonHeader.addEventListener('click', function() {
            console.log("Header Join Now clicked!"); // Debug
            alert("Join now functionality would open here."); // Alert message
        });
    } else {
        console.error("Header Join Now Button not found! Check ID 'joinnow-btn-header'.");
    }

}); // Make sure this closing tag is at the very end of the file


// Inside the loadSareeDetails function, after finding 'sareeData'

        // Update "You Might Also Like"
        const relatedList = document.getElementById('relatedSareesList');
        if (relatedList && sareeData.related) {
            relatedList.innerHTML = ''; // Clear existing items
            sareeData.related.forEach(relatedId => {
                // Get the data for the related saree (using your placeholder or API)
                const relatedSaree = allSareeData[relatedId]; // Assuming allSareeData holds all info

                if (relatedSaree) {
                    const li = document.createElement('li');

                    // **** THIS IS THE CRITICAL PART ****
                    // Ensure the href points to the correct file and includes the correct parameter
                    const linkHref = `saree-detail.html?saree=${relatedId}`;
                    // **** END CRITICAL PART ****

                    // Assuming relatedSaree.imageUrl points to a LARGE image, try to get a small one
                    // You might need a naming convention like 'image-small.jpg' vs 'image-large.jpg'
                    let smallImageUrl = relatedSaree.imageUrl; // Default to large if no small version logic
                    if (relatedSaree.imageUrl.includes('-large')) {
                         smallImageUrl = relatedSaree.imageUrl.replace('-large', '-small');
                    } else if (relatedSaree.imageUrl.includes('.')) {
                        // Simple attempt: insert -small before extension
                        let parts = relatedSaree.imageUrl.split('.');
                        let ext = parts.pop();
                        smallImageUrl = parts.join('.') + '-small.' + ext;
                    } // Add more robust logic if needed for image URLs

                    li.innerHTML = `
                        <a href="${linkHref}"> {/* Use the constructed linkHref here */}
                            <img src="${smallImageUrl}" alt="${relatedSaree.name}"> {/* Use small image */}
                            <div class="related-info">
                                {/* Use the structure from your screenshot */}
                                <h3>${relatedSaree.name}</h3>
                                <p>${relatedSaree.description.split('.')[0]}</p> {/* Example: Show short description */}
                                {/* <p>${relatedSaree.price}</p> /* Optionally show price */}
                            </div>
                        </a>
                    `;
                    relatedList.appendChild(li);
                } else {
                     console.warn(`Data not found for related saree ID: ${relatedId}`);
                }
            });

            // Update the "View All Collections" link if needed
            const viewAllBtn = document.querySelector('.view-all-button');
            if(viewAllBtn) {
                viewAllBtn.href = "collections.html"; // Set correct link for View All
            }

        } // End relatedList check

            // --- Review Form Submission (Adapt) ---
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const ratingInput = document.getElementById('ratingValue');
            const reviewTextArea = document.getElementById('reviewText');
            const currentSareeId = sareeId; // Get the ID of the saree being reviewed (from earlier code)

            const rating = ratingInput.value;
            const reviewText = reviewTextArea.value;

            if (rating === '0') {
                alert('Please select a star rating.'); // Use alert for validation feedback too
                return;
            }
            if (!reviewText.trim()) {
                 alert('Please enter your review text.');
                 return;
            }

            // **SIMULATE SENDING DATA TO SERVER HERE**
            // In a real app, you'd send 'rating', 'reviewText', and 'currentSareeId'
            // using fetch() to your backend API.

            console.log(`Submitting Review for ${currentSareeId}: Rating=${rating}, Review=${reviewText}`);

            // --- Display Confirmation ---
            // Option 1: Simple Alert Pop-up
            alert('Thank you for your review!');

            // --- Add review to the page (for demo purposes) ---
            const existingReviews = document.getElementById('existingReviews');
            const reviewCountSpan = document.getElementById('reviewCount');

            if (existingReviews && reviewCountSpan) { // Check if elements exist
                const currentCount = parseInt(reviewCountSpan.textContent) || 0;

                const noReviewsMsg = existingReviews.querySelector('p');
                if (currentCount === 0 && noReviewsMsg && noReviewsMsg.textContent.includes('No reviews yet')) {
                    noReviewsMsg.remove();
                }

                const newReview = document.createElement('div');
                newReview.classList.add('review-item'); // Use existing class for styling review display
                let starsHTML = '';
                for(let i=1; i<=5; i++){ starsHTML += (i <= rating) ? '★' : '☆'; }

                newReview.innerHTML = `
                    <div class="review-rating">${starsHTML}</div>
                    <p class="review-text">${escapeHTML(reviewText)}</p>
                    <p class="review-author">- You</p>
                `;
                existingReviews.prepend(newReview);
                reviewCountSpan.textContent = currentCount + 1;
            }


            // Reset the form AFTER showing confirmation/adding demo review
            reviewForm.reset();
            ratingInput.value = '0'; // Reset hidden rating value
            // Reset visual stars (call your highlightStars function if you have one)
             const starsContainer = document.querySelector('.star-rating .stars');
             if (starsContainer) {
                  const stars = starsContainer.querySelectorAll('i');
                  stars.forEach(star => {
                        star.classList.remove('selected', 'fas');
                        star.classList.add('far');
                  });
             }
        });
    } // End reviewForm check

    document.addEventListener('DOMContentLoaded', () => {

        // --- Get Modal Elements ---
        const signInModal = document.getElementById('signin-modal');
        const joinNowModal = document.getElementById('joinnow-modal');
        const subscribeModal = document.getElementById('subscribe-modal');
        const allModals = document.querySelectorAll('.modal-overlay'); // Assuming modals have this class
    
        // --- Get Trigger Button Elements ---
        const signInBtn = document.getElementById('signin-btn-header');
        const joinNowBtn = document.getElementById('joinnow-btn-header');
        const subscribeBtn = document.getElementById('subscribe-trigger-btn');
    
        // --- Get Close Button Elements (within each modal) ---
        const closeSignInBtn = signInModal?.querySelector('.modal-close-btn');
        const closeJoinNowBtn = joinNowModal?.querySelector('.modal-close-btn');
        const closeSubscribeBtn = subscribeModal?.querySelector('.modal-close-btn');
    
        // --- Reusable Functions ---
        function openModal(modalElement) {
            if (modalElement) {
                modalElement.style.display = 'flex'; // Use 'flex' to potentially center content
            } 
            else {
                console.warn("Attempted to open a modal that doesn't exist in the HTML.");
            }
        }
    
        function closeModal(modalElement) {
            if (modalElement) {
                modalElement.style.display = 'none';
            }
        }
    
        // --- Attach Event Listeners for Opening Modals ---
    
        // Sign In
        if (signInBtn && signInModal) {
            signInBtn.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default action if it's an <a> tag
                openModal(signInModal);
            });
        } else if (signInBtn && !signInModal) {
             console.warn("Sign In button found, but corresponding '#signin-modal' is missing in the HTML.");
        }
    
        // Join Now
        if (joinNowBtn && joinNowModal) {
            joinNowBtn.addEventListener('click', (event) => {
                event.preventDefault();
                openModal(joinNowModal);
            });
        } else if (joinNowBtn && !joinNowModal) {
             console.warn("Join Now button found, but corresponding '#joinnow-modal' is missing in the HTML.");
        }

        if (subscribeBtn && subscribeModal) {
            subscribeBtn.addEventListener('click', (event) => {
                event.preventDefault();
                openModal(subscribeModal);
            });
        } else if (subscribeBtn && !subscribeModal) {
             console.warn("Subscribe button found, but corresponding '#subscribe-modal' is missing in the HTML.");
        }
    
        // --- Attach Event Listeners for Closing Modals ---
    
        // Close Buttons (X)
        if (closeSignInBtn) {
            closeSignInBtn.addEventListener('click', () => closeModal(signInModal));
        }
        if (closeJoinNowBtn) {
            closeJoinNowBtn.addEventListener('click', () => closeModal(joinNowModal));
        }
        if (closeSubscribeBtn) {
            closeSubscribeBtn.addEventListener('click', () => closeModal(subscribeModal));
        }
    
        // Clicking the Overlay Background
        allModals.forEach(modal => {
            if (modal) {
                modal.addEventListener('click', (event) => {
                    // Check if the click was directly on the overlay (modal element itself)
                    // and NOT on its content (event.target)
                    if (event.target === modal) {
                        closeModal(modal);
                    }
                });
            }
        });
    
        // Pressing the Escape Key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                allModals.forEach(modal => {
                    // Check if the modal is currently displayed before closing
                    if (modal && modal.style.display === 'flex') { // Match display style used in openModal
                        closeModal(modal);
                    }
                });
            }
        });
    }); // End DOMContentLoaded Listener