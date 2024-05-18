const inputBox = document.getElementById("Input-Box"); //calling from the DOM and assigning to variable
const listContainer = document.getElementById("List-Container");

function addTask(){
    if (inputBox.value === '') {
        alert("Please enter a task"); //if nothing is entered prompt error message
    }
    else{
        let li = document.createElement("li"); //populate list
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); //adds 'x' for deletion
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value = ""; //set text box to empty after adding item
    saveData(); //call saveData function for local storage
}

listContainer.addEventListener("click", function (e) { //add event listener for clicking on list item
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("Checked"); //checks list item to show that it is complete
        saveData(); //calls saveData function to create local storage save of checked list items
    }
    else if (e.target.tagName === "SPAN") { //checks if 'X' button has been clicked
        e.target.parentElement.remove(); //removes list item
        saveData();
    }
}, false); //overides default behaviour

function saveData() { //savedata function which creates local storage save
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); //populates list item with save local storage save data
}

showTask();