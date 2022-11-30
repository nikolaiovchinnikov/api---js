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
//# sourceMappingURL=main.js.map