export const inerRepleise = (tag, className, atrib) => {
    let tagElement = document.createElement(tag);
    tagElement.className = className;
    if (atrib && className) {
        tagElement.setAttribute("href", atrib);
    }
    return tagElement;
};
//# sourceMappingURL=replese.js.map