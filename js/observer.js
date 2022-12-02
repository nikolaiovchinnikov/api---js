export const observerFunc = (id, window, left, second) => {
    let target = document.querySelector(window);
    const head = document.querySelector("head");
    let element = document.querySelector(id);
    if (element) {
        element.style.position = 'relative';
        element.style.right = left;
    }
    const options = { threshold: 1.0 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio && element && head) {
                element.style.animationDuration = second;
                element.style.animationFillMode = "forwards";
                element.style.animationName = "element";
                head.innerHTML += `<style>\n@keyframes element {\nfrom {  right: ${left}; }\nto {  right: 0; }\n}\n</style>\n`;
            }
        });
    }, options);
    if (target) {
        observer.observe(target);
    }
};
//# sourceMappingURL=observer.js.map