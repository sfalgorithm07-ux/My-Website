const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function () {
    const button = contactForm.querySelector("button");

    button.textContent = "Sending...";
    button.disabled = true;
});