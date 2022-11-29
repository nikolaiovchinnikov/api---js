import { Elements } from "./interface";
export const getTabel = ():Array<HTMLElement> => {
    const contenerTable:HTMLElement = document.createElement("div")
    const tabelElements:HTMLElement = document.createElement("div")
    tabelElements.className = "table";
    contenerTable.className = "table_contener"
    contenerTable.appendChild(tabelElements)
    const elemets:Elements = {
        code: document.createElement("div"),
        flag: document.createElement("img"),
        name: document.createElement("div"),
        capital: document.createElement("div"),
        population: document.createElement("div"),
    }
    const listTag:Array<HTMLElement> = []
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