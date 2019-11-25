let nav = document.querySelector("nav"); 
let arrow = document.getElementsByClassName("arrow")[0];
function showMenu() {
    if (window.getComputedStyle(nav, null).display === "none") {                        
        nav.style.display = "flex";
        arrow.style.transform = "rotate(180deg)";
    } else {
        nav.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }
}

let mockData = JSON.parse(localStorage.getItem("mockData")); 

if (!mockData) {
    mockData = [
        {
            title: 'backlog',
            issues: [
            ]
        },
        {
            title: 'ready',
            issues: [
            ]
        },  
        {
            title: 'in progress',
            issues: [
            ]
        }, 
        {
            title: 'finished',
            issues: [
            ]
        }   
    ]
}

for (let index = 0; index < mockData.length; index++) { 
    for (let i = 0; i < mockData[index].issues.length; i++) {
        let tasks = document.getElementsByClassName("tasks")[index];
        let taskContainer = document.createElement("div");
        taskContainer.setAttribute("class", "task");
        taskContainer.innerHTML = mockData[index].issues[i].name;
        tasks.appendChild(taskContainer);  
        addSpaceScroll(index);    
    }
}

for (let i = 1; i < mockData.length; i++) {
    if (mockData[i - 1].issues.length === 0) {
        let buttons = document.getElementsByClassName("add-cart")[i];
        buttons.style.color = "#ACB5C4";
        buttons.setAttribute("disabled", "disabled");
    }
}

for (let i = 0; i < mockData.length; i++) {
    let btn = document.getElementsByClassName("add-cart")[i];
    btn.addEventListener("click", addCart);
}

function addCart() {
    let statusBox = this.parentElement;
    let index = Array.from(statusBox.parentElement.children).indexOf(statusBox);
    let tasksClick = document.getElementsByClassName("tasks")[index];
    let taskContainer;
    if (index === 0) {   
        taskContainer = document.createElement("input");
        tasksClick.appendChild(taskContainer);  
    }
    else {
        taskContainer = document.createElement("select");
        let nullOption = document.createElement("option");
        taskContainer.appendChild(nullOption);
        nullOption.innerHTML = "";
        for (let i = 0; i < mockData[index - 1].issues.length; i++) {
            let option = document.createElement("option");
            taskContainer.appendChild(option);
            option.innerHTML = mockData[index - 1].issues[i].name;
        }
        tasksClick.appendChild(taskContainer); 
    }
    addSpaceScroll(index);
    taskContainer.focus();
    taskContainer.addEventListener("blur", addCartOnBlur);
}

function addCartOnBlur() {
    if (this.value.trim() !== "") {
        let container = this.parentElement;
        let taskContainer = document.createElement("div");
        taskContainer.setAttribute("class", "task");
        taskContainer.innerHTML = this.value; 
        container.appendChild(taskContainer);
        let taskNum = this.parentElement.parentElement.parentElement;
        let index = Array.from(taskNum.parentElement.children).indexOf(taskNum);
        let tasksLength = mockData[index].issues.length;
        let newTask = mockData[index].issues.push({name: "", id: ""})
        mockData[index].issues[tasksLength].id = "task" + (tasksLength + 1);
        mockData[index].issues[tasksLength].name = taskContainer.innerHTML;

        if (index !== 0) {
            let indexDelete = this.selectedIndex - 1;
            let taskDeleteContainer = document.getElementsByClassName("tasks")[index-1];
            let elementDelete = taskDeleteContainer.getElementsByTagName("div")[indexDelete];
            taskDeleteContainer.removeChild(elementDelete);
            mockData[index - 1].issues.splice(indexDelete, 1);
            for (let i = indexDelete; i < mockData[index - 1].issues; i++) {
                mockData[index].issues[i].id = "task" + (i + 1);
            }
            if (mockData[index - 1].issues.length === 0) {
                let buttonPrevious = document.getElementsByClassName("add-cart")[index];
                buttonPrevious.style.color = "#ACB5C4";
                buttonPrevious.setAttribute("disabled", "disabled");                
            }
        } 
        if (index !== 3) {
            let buttonNext = document.getElementsByClassName("add-cart")[index + 1];
            buttonNext.style.color = "#5E6C84";
            buttonNext.removeAttribute("disabled");           
        }   
        addSpaceScroll(index);
    }
    this.remove();
}

function addSpaceScroll(i) {
    let container = document.getElementsByClassName("scroll")[i];
    if (container.scrollHeight > container.clientHeight) {
        document.getElementsByClassName("tasks")[i].style.margin = "8px 12px 8px 0";
    }
}

window.addEventListener("unload", function() {
    let mockDataJSON = JSON.stringify(mockData); 
    localStorage.setItem("mockData", mockDataJSON); 
    for (let i = 0; i < mockData.length; i++) {
        let btn = document.getElementsByClassName("add-cart")[i];
        btn.removeEventListener("click", addCart);
    }    
});