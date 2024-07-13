document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById('taskInput');
    let button = document.querySelector('#addTaskBtn');
    let taskList = document.getElementById('taskList');

    button.addEventListener('click', () => {
        if (input.value.trim()) {
            addTask(input.value);
        } else {
            swal("Oops!", "Please enter a task", "error");
        }
    });

    function addTask(task) {
        let li = document.createElement('li');
        li.textContent = task;        
        taskList.appendChild(li);



        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fas fa-trash delete-icon';
        li.appendChild(deleteIcon);

        deleteIcon.addEventListener('click', () => {
            taskList.removeChild(li);
            swal("Deleted!", "Your task has been removed.", "success");
        });

        swal("Success!", "Task has been added.", "success");
    }
});
