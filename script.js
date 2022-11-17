// ----- IMPORT -----

import {printOut} from "./printOut.mjs"
import {init} from "./init.mjs"

// ----- Variables, classes and appendings 

const listContainer = document.querySelector(".listContainer");
const submitBtn = document.querySelector(".submitBtn");
const InputField = document.querySelector(".InputField");
export const toDoList = document.createElement("ul");
toDoList.setAttribute("class", "toDoList")
export const trashList = document.createElement("ul");
trashList.setAttribute("class", "trashList")
listContainer.appendChild(toDoList);
listContainer.appendChild(trashList);

// cals on the "init" function

init();

// ----- "OK" button that pushes "inputfield" value to LS and cals on the "printOut" function

submitBtn.onclick = () => {
    const newToDo = JSON.parse(localStorage.getItem("toDos"))
    newToDo.push(InputField.value)
    localStorage.setItem("toDos", (JSON.stringify(newToDo)))
    printOut();
    InputField.value = ""
};

