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
    // Add Task Event
    form.addEventListener('submit' , addTask);
    // Remove Task Event
    taskList.addEventListener('click' , removeTask);
    // Clear All Tasks Button Event
    clearBtn.addEventListener('click' , clearTasks);
    // Filter Tasks Event
    filter.addEventListener('keyup' , filterTasks);
    // Task Input Event
    taskInput.addEventListener('clickup' , addTaskInput);

}

// Functions for Event Handlers
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

    // Clear Input
    taskInput.value ='';
    }

    e.preventDefault();
}

// Remove Task Function
function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item')){

        console.log('delete item');
        
        if(confirm('Are your sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }
}
    
// Clear Tasks Function
function clearTasks(){

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
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