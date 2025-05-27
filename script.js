document.addEventListener("DOMContentLoaded", function () {
  const animElements = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });
  animElements.forEach(el => observer.observe(el));
});
