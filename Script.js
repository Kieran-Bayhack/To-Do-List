const inputBox = document.getElementById("Input-Box");
const listContainer = document.getElementById("List-Container");

function addTask(){
    if (inputBox.value === '') {
        alert("Please enter a task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}