const listContainer = document.querySelector(".listContainer");
const submitBtn = document.querySelector(".submitBtn");
const InputField = document.querySelector(".InputField");
const ulist = document.createElement("ul");
listContainer.appendChild(ulist);


const iconTrash = document.createElement("i");
iconTrash.setAttribute("class", "fa-solid fa-trash")



const toDos = [
    "Clean bathroom floor",
    "Feed the dog",
    "Clean the fishes",
    "Charge the phone"
];




function printOut() {
    ulist.innerHTML = ""

/*     const iconSquare = document.createElement("a"); */
/*     iconSquare.setAttribute("type", "button") */

 /*    iconSquare.appendChild(i) */

    toDos.forEach(toDo => {
        const elementContainer = document.createElement("div")
        elementContainer.setAttribute("class", "elementContainer")

        const i = document.createElement("i");
        i.setAttribute("class", "fa-regular fa-square");

        const paragraph = document.createElement("p");

        elementContainer.append(i, paragraph)

        paragraph.innerText += toDo

        ulist.appendChild(elementContainer)


        i.addEventListener("click", checkBox)
    })



}

printOut()

function checkBox(icon) {
    toDos.findIndex(icon)

   console.log("hej")

    

}


submitBtn.onclick = () => {
    toDos.push(InputField.value)
    printOut();
    InputField.value = ""
    console.log(toDos)
};



/* <i class="fa-regular fa-square"></i> */
//<i class="fa-regular fa-square-check"></i>
//<i class="fa-regular fa-trash"></i>

    // console.log("fhdf")