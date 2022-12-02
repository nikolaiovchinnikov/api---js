export const inerRepleise = (tag:string,className:string,atrib?:string,):HTMLElement => {
    let tagElement :HTMLElement = document.createElement(tag)
    tagElement.className = className
    if(atrib && className){
        tagElement.setAttribute("href",atrib)
    }
    return tagElement
}