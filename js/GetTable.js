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
//# sourceMappingURL=GetTable.js.map