(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTabel = void 0;
const getTabel = (num) => {
    const contenerTable = document.createElement("div");
    const tabelElements = document.createElement("div");
    tabelElements.style.display = "flex";
    tabelElements.className = "table" + num;
    contenerTable.className = "table_contener" + num;
    contenerTable.appendChild(tabelElements);
    const elemets = {
        code: document.createElement("div"),
        flag: document.createElement("img"),
        name: document.createElement("div"),
        capital: document.createElement("div"),
        population: document.createElement("div"),
    };
    const listTag = [];
    const objectName = Object.keys(elemets);
    let index = 0;
    for (let i of Object.values(elemets)) {
        i.className = objectName[index];
        tabelElements.appendChild(i);
        listTag.push(i);
        index++;
    }
    listTag.push(tabelElements);
    listTag.push(contenerTable);
    return listTag;
};
exports.getTabel = getTabel;

},{}],2:[function(require,module,exports){
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
        // if(element in arrayObject){
        //     tagElement.innerText = Object(arrayObject)[element] + " :" 
        // }
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
        // else if(ischeck[k] in arrayObject) {
        //     title[k].className = "sub_contener"
        //     Array(Object.values(element)).forEach((values, L) => {
        //         Object.values(values).forEach((subElement, i) => {
        //             console.log(subElement)
        //             // const subTitle:HTMLElement = document.createElement("h2")
        //             // subTitle.className = "sub_tatle";
        //             // subTitle.innerText = subElement + " :"
        //             // title[k].appendChild(subTitle)
        //             // const el = Object.values(element)[L] as Object
        //             // let tagElement:HTMLElement = document.createElement("p")
        //             // tagElement.className = "values"
        //             // tagElement.innerText = Object.values(el)[i] + " :"
        //             // title[k].appendChild(tagElement)
        //         });
        //     });
        // }
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

},{"./objectTag":4}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetTable_1 = require("./GetTable");
const observer_1 = require("./observer");
const getListInfo_1 = require("./getListInfo");
const body = document.querySelector("body");
const form = document.querySelector("#form");
const preloaderBox = document.querySelector(".preloader_box");
// const flag:HTMLImageElement | null = document.querySelector(".flagImg");
const infoBtn = document.querySelector("#info");
if (form && preloaderBox && infoBtn && body) {
    form.addEventListener("submit", (e) => {
        const countryName = document.querySelector("#country-name");
        preloaderBox.style.display = "flex";
        e.preventDefault();
        $.ajax({
            method: 'GET',
            url: `https://restcountries.com/v2/name/${countryName !== null ? countryName.value : "Antarctica"}`,
            success: (response) => {
                const country = response[0];
                (0, getListInfo_1.getListInfo)(country);
                preloaderBox.style.display = "none";
            },
            error: (error) => {
                preloaderBox.style.display = "none";
                console.log(error);
            }
        });
    });
    infoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        preloaderBox.style.display = "flex";
        $.ajax({
            method: 'GET',
            url: "https://restcountries.com/v2/all",
            success: (response) => {
                for (let i = 0; i < response.length; i++) {
                    const country = response[i];
                    const tagList = (0, GetTable_1.getTabel)(i);
                    body.appendChild(tagList[6]);
                    if (country.currencies) {
                        tagList[0].innerText = country.currencies[0].code;
                    }
                    tagList[1].setAttribute("src", country.flag);
                    tagList[2].innerText = country.name;
                    tagList[3].innerText = country.capital;
                    tagList[4].innerText = country.population;
                    (0, observer_1.observerFunc)(".table" + i, ".table_contener" + i, "1105px", "4s");
                }
                preloaderBox.style.display = "none";
            },
            error: (error) => {
                preloaderBox.style.display = "none";
                console.log(error);
            }
        });
    });
}
;

},{"./GetTable":1,"./getListInfo":2,"./observer":5}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arreyObjectObject = exports.objectObject = exports.arrayString = exports.str = exports.dict = void 0;
exports.dict = {
    "name": ["Название", "string"],
    "topLevelDomain": ["Домен верхнего уровня", "Array<string>"],
    "alpha2Code": ["Альфакод2", "string"],
    "alpha3Code": ["Альфакод3", "string"],
    "callingCodes": ["Мобильный код", "Array<string>"],
    "capital": ["Столица", "string"],
    "altSpellings": ["Альтернативное имя", "Array<string>"],
    "subregion": ["Регион континента", "string"],
    "region": ["Регион мира", "string"],
    "population": ["Население", "string"],
    "latlng": ["Кординаты", "Array<string>"],
    "demonym": ["demonym", "string"],
    "area": ["Площадь", "string"],
    "gini": ["gini", "string"],
    "timezones": ["Тайм-Зона", "Array<string>"],
    "borders": ["Границы", "Array<string>"],
    "nativeName": ["Родное имя", "string"],
    "numericCode": ["Числовой код", "string"],
    "flags": ["Флаги", "Object<Object>"],
    "currencies": ["Валюта", "Array<Object>", { "code": "Код", "name": "Имя", "symbol": "Символ" }],
    "languages": [
        "Язык",
        "Array<ObjectObject>",
        { "iso639_1": "iso639_1", "iso639_2": "iso639_2", "name": "Имя", "nativeName": "Родное имя" },
        { "iso639_1": "iso639_1", "iso639_2": "iso639_2", "name": "Имя", "nativeName": "Родное имя" },
    ],
    "translations": [
        "Перевод названия страны",
        "Object<Object>",
        { "br": "br", "pt": "pt", "nl": "nl", "hr": "hr", "fa": "fa", "de": "de", "es": "es", "fr": "fr", "ja": "ja", "it": "it", "hu": "hu" },
    ],
    "flag": ["Флаг", "string"],
    "regionalBlocs": [
        "Политический статус",
        "Array<Object>",
        { "acronym": "acronym", "name": "Имя", "otherAcronyms": "Другой acronym", }
    ],
    "cioc": ["Сioc", "string"],
    "independent": ["Статус независимости", "string"],
};
exports.str = {
    "name": "Название",
    "alpha2Code": "Альфа код 2",
    "alpha3Code": "Альфа код 3",
    "capital": "Столица",
    "subregion": "Суб-регион",
    "region": "Регион",
    "population": "Население",
    "demonym": "demonym",
    "area": "Площадь",
    "gini": "gini",
    "nativeName": "Родное имя",
    "numericCode": "Числовой код",
    "flag": "Флаг",
    "cioc": "cioc",
    "independent": "Статус независимости",
};
exports.arrayString = {
    "topLevelDomain": "Домен верхнего уровня",
    "callingCodes": "Мобильный код",
    "altSpellings": "Альтернативное имя",
    "latlng": "Кординаты",
    "timezones": "Тайм зона",
    "borders": "Границы",
};
// export const arrayObject = {
//     "currencies": "Валюта",
//     "regionalBlocs": "Политический статус",
// }
exports.objectObject = {
    "translations": "Перевод названия страны",
    "flags": "Флаги",
};
exports.arreyObjectObject = {
    "languages": "Язык",
    "currencies": "Валюта",
    "regionalBlocs": "Политический статус",
};

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observerFunc = void 0;
const observerFunc = (id, window, left, second) => {
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
exports.observerFunc = observerFunc;

},{}]},{},[3]);
