var AddTaskButton = document.getElementById("addTask-btn");
var TextEditor = document.getElementById("textEditor");
var SaveButton = document.getElementById("save-btn");
var ListContainer = document.getElementById("listContainer");
var LoadingPage = document.querySelector(".loadingPage");


function displayEditor()
{
    AddTaskButton.classList.add("clickDesign");
    TextEditor.style.display = "block";
}

function displaySaveButton()
{
    SaveButton.style.display = "block";
}

function saveWork()
{
    var ListItem = document.createElement("li");
    ListItem.textContent = TextEditor.value;
    ListItem.innerHTML = ListItem.textContent + "<button id='delete-btn' onclick='deleteWork(event)'>Delete</button>";
    ListContainer.append(ListItem);
    SaveButton.style.display = "none";
    TextEditor.style.display = "none";
    TextEditor.value = "";
}

function deleteWork(event)
{
    event.target.parentElement.remove();
}


window.addEventListener("load",()=>{
    LoadingPage.style.display = "none";
});
