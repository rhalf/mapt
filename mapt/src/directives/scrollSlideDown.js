const intersectionObserver = new IntersectionObserver(
    (entries, intersectionObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-slide-down-after');
                intersectionObserver.unobserve(entry.target);
            }
        });
    }
);

export default {
    bind(el) {
        el.classList.add('scroll-slide-down-before');
        intersectionObserver.observe(el);
    }
}