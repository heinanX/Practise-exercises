// ----- IMPORT -----

import {trashList} from "./script.js"

// ----- Creates an li-element for each thing in LS key "done" and adds an
// ----- eventlistener to the li-element that removes the li when clicked

export function removeDone() {
    trashList.innerText = ""
    const addRemoved =  JSON.parse(localStorage.getItem("done"))
    addRemoved.forEach(toDo => {
        const li = document.createElement("li");
        li.innerText += toDo
        trashList.appendChild(li)
        li.addEventListener("click", () => {  //  <------------------------------------------------------------------------------
        const index = addRemoved.findIndex(toDos => toDo == toDos);
        addRemoved.splice(index, 1);
        localStorage.setItem("done", JSON.stringify(addRemoved))
        removeDone()
        })
    })
}