import { str, arrayString, objectObject, arreyObjectObject } from "./objectTag.js";
import { inerRepleise } from "./replese.js";
export const getListInfo = (country) => {
    const infoContener = document.querySelector("#infoContener");
    Object.keys(country).forEach((element, k) => {
        const infoBoxItem = document.createElement("div");
        infoBoxItem.className = "info_box_item";
        const tagElement = document.createElement("h1");
        tagElement.className = "title";
        if (element in str) {
            tagElement.innerText = Object(str)[element] + " :";
        }
        else if (element in arrayString) {
            tagElement.innerText = Object(arrayString)[element] + " :";
        }
        else if (element in objectObject) {
            tagElement.innerText = Object(objectObject)[element] + " :";
        }
        else if (element in arreyObjectObject) {
            tagElement.innerText = Object(arreyObjectObject)[element] + " :";
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
        const tagElement = document.createElement("p");
        tagElement.className = "string";
        if (ischeck[k] in str) {
            let tagElement = ischeck[k] === Object.keys(str)[12] ? inerRepleise("a", "link1", element) : inerRepleise("p", "string");
            tagElement.innerText = element + " :";
            title[k].appendChild(tagElement);
            tagElement.innerText = element + " :";
            title[k].appendChild(tagElement);
        }
        else if (ischeck[k] in arrayString) {
            tagElement.innerText = element.join(" ,");
            title[k].appendChild(tagElement);
        }
        else if (ischeck[k] in objectObject) {
            title[k].className = "sub_contener";
            Object.keys(element).forEach((subElement, i) => {
                const subTitle = document.createElement("h2");
                subTitle.className = "sub_tatle";
                subTitle.innerText = subElement + " :";
                title[k].appendChild(subTitle);
                const text = ischeck[k] === Object.keys(objectObject)[1] ? inerRepleise("a", "link2", Object.values(element)[i]) : inerRepleise("p", "values");
                text.innerText = Object.values(element)[i];
                title[k].appendChild(text);
            });
        }
        else if (ischeck[k] in arreyObjectObject) {
            title[k].className = "sub_contener";
            Object.values(element).forEach((subElement) => {
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
        ;
    });
};
//# sourceMappingURL=getListInfo.js.map