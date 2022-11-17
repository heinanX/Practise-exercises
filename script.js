const listContainer = document.querySelector(".listContainer");
const submitBtn = document.querySelector(".submitBtn");
const InputField = document.querySelector(".InputField");
const toDoList = document.createElement("ul");
toDoList.setAttribute("class", "toDoList")
const trashList = document.createElement("ul");
trashList.setAttribute("class", "trashList")
listContainer.appendChild(toDoList);
listContainer.appendChild(trashList);

// ----- Empty Arrays which is stored in LS

const toDos = [
    "a","b","c","d","e","f","g"
];

const done = [];

// ----- Prints out stored stuff from LS

function init() {
    if (!localStorage.getItem("toDos")) {
        localStorage.setItem("toDos", JSON.stringify(toDos))
    }
    if (!localStorage.getItem("done")) {
        localStorage.setItem("done", JSON.stringify(done))
    }
    printOut()
    removeDone()
}

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

// ----- each toDos in LS appends to elementContainer from index.html

function printOut() {
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

// ----- Creates an li-element for each thing in LS key "done" and adds an
// ----- eventlistener to the li-element that removes the li when clicked

function removeDone() {
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