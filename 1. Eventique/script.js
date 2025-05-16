// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Placeholder for form submission
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Form submitted (placeholder functionality).");
    form.reset();
  });
});

// Future enhancements could include:
// - Modal popups
// - Gallery image slider
// - Form validation
// - Sticky header
// - Animation triggers
