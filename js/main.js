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
//# sourceMappingURL=main.js.map