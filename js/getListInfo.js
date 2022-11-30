"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListInfo = void 0;
const objectTag_1 = require("./objectTag");
const getListInfo = (country) => {
    const infoContener = document.querySelector("#infoContener");
    Object.keys(country).forEach((element, k) => {
        const infoBoxItem = document.createElement("div");
        infoBoxItem.className = "info_box_item";
        let tagElement = document.createElement("H1");
        tagElement.className = "title";
        if (element in objectTag_1.str) {
            tagElement.innerText = Object(objectTag_1.str)[element] + " :";
        }
        if (element in objectTag_1.arrayString) {
            tagElement.innerText = Object(objectTag_1.arrayString)[element] + " :";
        }
        if (element in objectTag_1.objectObject) {
            tagElement.innerText = Object(objectTag_1.objectObject)[element] + " :";
        }
        if (element in objectTag_1.arreyObjectObject) {
            tagElement.innerText = Object(objectTag_1.arreyObjectObject)[element] + " :";
        }
        if (infoContener) {
            infoContener.appendChild(infoBoxItem);
        }
        if (tagElement) {
            infoBoxItem.appendChild(tagElement);
        }
    });
    const title = document.querySelectorAll(".info_box_item");
    const ischeck = Object.keys(country);
    Object.values(country).forEach((element, k) => {
        let tagElement = document.createElement("p");
        tagElement.className = "string";
        if (ischeck[k] in objectTag_1.str) {
            tagElement.innerText = element + " :";
            title[k].appendChild(tagElement);
        }
        else if (ischeck[k] in objectTag_1.arrayString) {
            tagElement.innerText = element.join(" ,");
            title[k].appendChild(tagElement);
        }
        else if (ischeck[k] in objectTag_1.objectObject) {
            title[k].className = "sub_contener";
            Object.keys(element).forEach((subElement, i) => {
                const subTitle = document.createElement("h2");
                subTitle.className = "sub_tatle";
                subTitle.innerText = subElement + " :";
                title[k].appendChild(subTitle);
                const text = document.createElement("p");
                text.className = "values";
                text.innerText = Object.values(element)[i];
                title[k].appendChild(text);
            });
        }
        else if (ischeck[k] in objectTag_1.arreyObjectObject) {
            title[k].className = "sub_contener";
            Object.values(element).forEach((subElement, i) => {
                Object.keys(subElement).forEach((element, l) => {
                    const subTitle = document.createElement("h2");
                    subTitle.className = "sub_tatle";
                    subTitle.innerText = element + " :";
                    title[k].appendChild(subTitle);
                    const text = document.createElement("p");
                    text.className = "values";
                    text.innerText = Object.values(subElement)[l];
                    title[k].appendChild(text);
                });
            });
        }
    });
};
exports.getListInfo = getListInfo;
//# sourceMappingURL=getListInfo.js.map