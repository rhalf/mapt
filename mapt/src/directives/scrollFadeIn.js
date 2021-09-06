const intersectionObserver = new IntersectionObserver(
    (entries, intersectionObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-fade-in-after');
                intersectionObserver.unobserve(entry.target);
            }
        });
    }
);

export default {
    bind(el) {
        el.classList.add('scroll-fade-in-before');
        intersectionObserver.observe(el);
    }
}