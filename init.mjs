// ----- IMPORT -----

import {removeDone} from "./removeDone.mjs"
import {printOut} from "./printOut.mjs"

// ----- Empty Arrays which is stored in LS

const toDos = [
    "a","b","c","d","e","f","g"
];

const done = [];

// ----- Prints out stored stuff from LS

export function init() {
    if (!localStorage.getItem("toDos")) {
        localStorage.setItem("toDos", JSON.stringify(toDos))
    }
    if (!localStorage.getItem("done")) {
        localStorage.setItem("done", JSON.stringify(done))
    }
    printOut()
    removeDone()
}