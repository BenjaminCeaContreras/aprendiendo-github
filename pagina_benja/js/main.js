document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -70% 0px", // Esto define el "área de detección"
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                // Limpiar clase active de todos los links
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    // Si el href del link coincide con el id de la sección visible
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                        console.log("Sección activa detectada:", id);
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Activar el observador para cada sección
    sections.forEach((section) => observer.observe(section));
});