function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    let taskCount = taskList.getElementsByTagName("li").length;

    if (taskCount >= 5) {
        alert("Itna kaam acha nahi, pehle purana khatam kar!");
        return; // Stop execution if task count exceeds 10
    }
    
    if (taskInput.value==''){
        alert("please enter a task");
        return;
    }
    var li=document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check-button");
    checkBox.onclick = function (){
        li.style.textDecoration = checkBox.checked ? "line-through" : "none";
    };

    var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;

        var deleteButton = document.createElement("delete");
        deleteButton.textContent = "x";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };
        li.appendChild(checkBox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
}