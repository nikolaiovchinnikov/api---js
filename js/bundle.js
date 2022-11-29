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
const GetTable_1 = require("./GetTable");
const observer_1 = require("./observer");
const countryName = document.querySelector("#country-name");
const body = document.querySelector("body");
const form = document.querySelector("#form");
const preloaderBox = document.querySelector(".preloader_box");
const tagList = document.querySelectorAll("#name, #region, #subregion, #capital, #flag");
const flag = document.querySelector(".flagImg");
const infoBtn = document.querySelector("#info");
if (form && countryName && flag && preloaderBox && infoBtn && body) {
    form.addEventListener("submit", (e) => {
        preloaderBox.style.display = "flex";
        e.preventDefault();
        $.ajax({
            method: 'GET',
            url: `https://restcountries.com/v2/name/${countryName.value}`,
            success: (response) => {
                const country = response[0];
                tagList[0].innerText = country.name;
                tagList[1].innerText = country.region;
                tagList[2].innerText = country.subregion;
                tagList[3].innerText = country.capital;
                tagList[4].innerText = country.flag;
                flag.setAttribute("src", country.flag);
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

},{"./GetTable":1,"./observer":3}],3:[function(require,module,exports){
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

},{}]},{},[2]);
