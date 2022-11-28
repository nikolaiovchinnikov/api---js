const countryName:HTMLButtonElement | null = document.querySelector("#country-name");
const form:HTMLElement | null = document.querySelector("#form");
const preloaderBox :HTMLImageElement | null = document.querySelector(".preloader_box");
const tagList:NodeListOf<HTMLElement> = document.querySelectorAll("#name, #region, #subregion, #capital, #flag");
const flag:HTMLImageElement | null = document.querySelector(".flagImg");


if (form && countryName && flag && preloaderBox){
    form.addEventListener("submit",(e)=>{
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
                flag.setAttribute("src",country.flag);
                preloaderBox.style.display = "none";
            },
            error: (error) => {
                preloaderBox.style.display = "none";
                console.log(error);
            }
          });
    });
};


