document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach(testimonial => {
            testimonial.style.display = "none";
        });
        testimonials[index].style.display = "block";
    }

    function nextTestimonial() {
        index++;
        if (index >= testimonials.length) {
            index = 0;
        }
        showTestimonial();
    }

    // Show the first testimonial initially
    showTestimonial();

    // Automatically switch to the next testimonial every 3 seconds
    setInterval(nextTestimonial, 3000);
});
