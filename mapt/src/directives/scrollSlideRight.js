const intersectionObserver = new IntersectionObserver(
    (entries, intersectionObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-slide-right-after');
                intersectionObserver.unobserve(entry.target);
            }
        });
    }
);

export default {
    bind(el) {
        el.classList.add('scroll-slide-right-before');
        intersectionObserver.observe(el);
    }
}
