const listContainer = document.querySelector(".listContainer");
const submitBtn = document.querySelector(".submitBtn");
const InputField = document.querySelector(".InputField");
const toDoList = document.createElement("ul");
toDoList.setAttribute("class", "toDoList")
const trashList = document.createElement("ul");
trashList.setAttribute("class", "trashList")
listContainer.appendChild(toDoList);
listContainer.appendChild(trashList);

const toDos = [];

const done = [];

function init() {
    if (!localStorage.getItem("toDos")) {
        localStorage.setItem("toDos", JSON.stringify(toDos))
    }
    if (!localStorage.getItem("done")) {
        localStorage.setItem("done", JSON.stringify(done))
    }
    printOut()
    const addRemoved =  JSON.parse(localStorage.getItem("done"))
    addRemoved.forEach(toDo => {
        const li = document.createElement("li");
        li.innerText += toDo
        trashList.appendChild(li)
    })
}

init();

function printOut() {
    toDoList.innerHTML = ""
    const newToDo = JSON.parse(localStorage.getItem("toDos"))
    newToDo.forEach(toDo => {
        const elementContainer = document.createElement("div")
        elementContainer.setAttribute("class", "elementContainer")

        const i = document.createElement("i");
        i.setAttribute("class", "fa-regular fa-square");

        const paragraph = document.createElement("p");

        elementContainer.append(i, paragraph)

        paragraph.innerHTML += toDo

        toDoList.appendChild(elementContainer)


        i.addEventListener("click", () => {
            checkBox(i, elementContainer, paragraph)
        })
    })
}

function checkBox(icon, elementContainer,paragraph) {
    icon.setAttribute("class", "fa-regular fa-square-check")
    paragraph.style = "text-decoration: line-through #191a21 3px"
    setTimeout(()=>{
        icon.setAttribute("class", "fa-solid fa-trash")
    },500)

    icon.addEventListener("click", ()=>{
        const doneToRemove =  JSON.parse(localStorage.getItem("done"))
        const removeFromToDos =  JSON.parse(localStorage.getItem("toDos"))

        const index = removeFromToDos.findIndex(item => paragraph.innerText == item );
        console.log(paragraph.innerText)
        console.log(index)
        removeFromToDos.splice(index, 1);

        // removeFromToDos.splice(elementContainer, 1)
        localStorage.setItem("toDos", JSON.stringify(removeFromToDos))
        doneToRemove.push(paragraph.innerText)

        localStorage.setItem("done", JSON.stringify(doneToRemove))
        elementContainer.remove()
        toDos.splice(elementContainer, 1)
        
        trashList.append(paragraph)
    })
}

submitBtn.onclick = () => {
    const newToDo = JSON.parse(localStorage.getItem("toDos"))

    newToDo.push(InputField.value)
    localStorage.setItem("toDos", (JSON.stringify(newToDo)))
    printOut();
    InputField.value = ""
};