// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listeners
loadEventListeners();

// Load All Event Listeners
function loadEventListeners(){
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks)
    // Add Task Event
    form.addEventListener('submit' , addTask);
    // Remove Task Event
    taskList.addEventListener('click' , removeTask);
    // Clear All Tasks Button Event
    clearBtn.addEventListener('click' , clearTasks);
    // Filter Tasks Event
    filter.addEventListener('keyup' , filterTasks);
}

// Functions for Event Handlers
// Get Tasks from Local Storage
function getTasks(){

    let tasks;
    if(localStorage.getItem('tasks') === null){

        tasks = [];

    } else {

        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){

        // Create li element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);

    })

}

// Add Task Function
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    } else {

    // Create li element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    }

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear Input
    taskInput.value ='';

    e.preventDefault();
}

// Function to store data in local storage
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){

        tasks = [];

    } else {

        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task Function
function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item')){

        console.log('delete item');
        
        if(confirm('Are your sure?')){
        e.target.parentElement.parentElement.remove();

        // Remove From Local Storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement) ; 

        }

        
    }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem){

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    task.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1) ;
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Clear Tasks Function
function clearTasks(){

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from LS
    clearTasksFromLocalStorage() ;
}

// Clear tasks from LS
function clearTasksFromLocalStorage(){
    localStorage.clear();
}


// Filter Tasks Function
function filterTasks(e){
    const text = e.target.value.toLowerCase() ; 

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent ;
        if(item.toLowerCase().indexOf(text) != -1){

            task.style.display = 'block';

        } else {

            task.style.display = 'none';

        }
    });
}