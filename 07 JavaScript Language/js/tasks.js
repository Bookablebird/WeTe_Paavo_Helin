// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = [];

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);

        //removeDuplicates();
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;

        //clears text filed after submit
        document.getElementById("task").value = "";

    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

function removeDuplicates(){

    //removes duplicates from "tasks" and turns it to a new list "unique"
    let unique = [...new Set(tasks)];
    console.log(unique);

    //replaces tasks with the new list
    tasks = unique.splice(0);
}


// Initial setup:
function init() {
    'use strict';

    document.getElementById('theForm').onsubmit = addTask || removeDuplicates;

} // End of init() function.
window.onload = init;