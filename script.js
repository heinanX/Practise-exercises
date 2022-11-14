const listContainer = document.querySelector(".listContainer");
const submitBtn = document.querySelector(".submitBtn");
const InputField = document.querySelector(".InputField");
const ulist = document.createElement("ul");
listContainer.appendChild(ulist);
const iconWhite = document.createElement("i");



const toDos = [
    "Clean bathroom floor",
    "Feed the dog",
    "Clean the fishes",
    "Charge the phone"
];



function printOut() {
    ulist.innerHTML = ""
    toDos.forEach(toDo => {
        ulist.appendChild(document.createElement("p")).innerHTML+=toDo
    })
}

printOut()

submitBtn.onclick = () => {
    toDos.push(InputField.value)
    printOut();
    console.log(toDos)
};



/* <i class="fa-regular fa-square"></i> */
//<i class="fa-regular fa-square-check"></i>
//<i class="fa-regular fa-trash"></i>

    // console.log("fhdf")