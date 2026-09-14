function registerNow() {

    alert(
        "You're in! 🚀\n\n" +
        "Registration for VentureVerse 2026 is opening soon."
    );

}


/* Small scroll reveal effect */

const cards = document.querySelectorAll(
    ".feature-card, .speaker, .timeline-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "0.7s ease";

    observer.observe(card);

});