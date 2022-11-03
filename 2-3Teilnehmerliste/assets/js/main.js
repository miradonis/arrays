
const btn_addText = document.getElementById("btnAddText");
const btn_removeText = document.getElementById("btnRemoveText");
const addListPoints = document.getElementById("addListPoints");

const arrayInput = [];

const addText = () => {
    const userInput = document.getElementById("userInput").value;

    arrayInput.push(userInput);

    const li = document.createElement("li");
    addListPoints.appendChild(li);
    li.innerHTML = userInput;

    document.getElementById("myForm").reset();
}

function removeText() {
    arrayInput.pop();
    addListPoints.removeChild(addListPoints.lastChild);
}