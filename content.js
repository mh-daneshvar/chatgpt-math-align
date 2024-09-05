// Function to apply the 'direction: ltr' to all KaTeX elements
function applyMathAlign() {
    const katexElements = document.querySelectorAll('.katex');
    katexElements.forEach(katexElement => {
        katexElement.style.setProperty('direction', 'ltr', 'important');
    });
    console.log('Applied direction: ltr to KaTeX elements');
}

// Observe the page for dynamically loaded content
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        // Check if new nodes were added to the DOM
        if (mutation.addedNodes.length > 0) {
            applyMathAlign(); // Apply the alignment to any new KaTeX elements
        }
    });
});

// Start observing the entire document body for changes
observer.observe(document.body, {
    childList: true, // Listen for new child nodes
    subtree: true    // Look deep into the DOM tree
});

// Apply alignment to already existing KaTeX elements when the script is first loaded
applyMathAlign();
