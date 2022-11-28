const countryName:HTMLButtonElement | null = document.querySelector("#country-name");
const body:HTMLElement| null = document.querySelector("body")
const form:HTMLElement | null = document.querySelector("#form");
const preloaderBox :HTMLImageElement | null = document.querySelector(".preloader_box");
const tagList:NodeListOf<HTMLElement> = document.querySelectorAll("#name, #region, #subregion, #capital, #flag");
const flag:HTMLImageElement | null = document.querySelector(".flagImg");
const infoBtn:HTMLButtonElement | null = document.querySelector("#info")
const getTabel = () => {
    const contenerTable:HTMLElement = document.createElement("div")
    const tabelElements:HTMLElement = document.createElement("div")
    tabelElements.className = "table";
    contenerTable.className = "table_contener"
    contenerTable.appendChild(tabelElements)
    interface Elements {
        code: HTMLDivElement
        flag: HTMLDivElement
        name: HTMLDivElement
        capital: HTMLDivElement
        population: HTMLDivElement
    }
    const elemets:Elements = {
        code: document.createElement("div"),
        flag: document.createElement("img"),
        name: document.createElement("div"),
        capital: document.createElement("div"),
        population: document.createElement("div"),
    }
    const listTag = []
    const objectName = Object.keys(elemets) 
    let index:number = 0
    for (let i of Object.values(elemets)) {
        i.className = objectName[index]
        tabelElements.appendChild(i)
        listTag.push(i)
        index++
    }
    listTag.push(tabelElements)
    listTag.push(contenerTable)
    return listTag
}
getTabel()
if (form && countryName && flag && preloaderBox && infoBtn && body){
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
    infoBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        preloaderBox.style.display = "flex";
        $.ajax({
            method: 'GET',
            url: "https://restcountries.com/v2/all",
            success: (response) => {
                for (let i = 0; i < response.length; i++) {
                    const country = response[i];
                    const tagList = getTabel()
                    body.appendChild(tagList[6])
                    if(country.currencies){
                        tagList[0].innerText = country.currencies[0].code;
                    }
                    tagList[1].setAttribute("src", country.flag) 
                    tagList[2].innerText = country.name;
                    tagList[3].innerText = country.capital;
                    tagList[4].innerText = country.population;
                }
                preloaderBox.style.display = "none";
            },
            error: (error) => {
                preloaderBox.style.display = "none";
                console.log(error);
            }
        })
    })
};


