// ----- IMPORT -----

import {init} from "./init.mjs"
import {toDoList, trashList} from "./script.js"

// ----- each toDos in LS appends to elementContainer from index.html

export function printOut() {
    toDoList.innerHTML = ""
    const newToDo = JSON.parse(localStorage.getItem("toDos"))

    newToDo.forEach(toDo => {
        const elementContainer = document.createElement("div")
        elementContainer.setAttribute("class", "elementContainer")
        const icon = document.createElement("i");
        icon.setAttribute("class", "fa-regular fa-square");
        const paragraph = document.createElement("p");
        elementContainer.append(icon, paragraph)
        paragraph.innerHTML += toDo
        toDoList.appendChild(elementContainer)

        icon.addEventListener("click", () => {
            checkBox(icon, elementContainer, paragraph)
        })
    })
}

// ----- changes the checkbox icon when clicking on it

function checkBox(icon, elementContainer,paragraph) {
    icon.setAttribute("class", "fa-regular fa-square-check")
    paragraph.style = "text-decoration: line-through #191a21 3px"
    setTimeout(()=>{
        icon.setAttribute("class", "fa-solid fa-trash")
    },500)

    // ----- Removes toDos from LS Key "toDos" and adds it to LS key "done"

    icon.addEventListener("click", ()=>{
        trashList.innerText = ""
        const doneToRemove =  JSON.parse(localStorage.getItem("done"))
        const removeFromToDos =  JSON.parse(localStorage.getItem("toDos"))
        const index = removeFromToDos.findIndex(toDos => paragraph.innerText == toDos );
        removeFromToDos.splice(index, 1);
        elementContainer.remove()
        localStorage.setItem("toDos", JSON.stringify(removeFromToDos))
        doneToRemove.push(paragraph.innerText)
        localStorage.setItem("done", JSON.stringify(doneToRemove))
        init()
    })
}
