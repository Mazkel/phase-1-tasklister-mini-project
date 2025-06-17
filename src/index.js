document.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelector('#tasks');
    const input = document.querySelector('#new-task-description');
    const form = document.getElementById("create-task-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

    const taskText = input.value;
    const priority = document.getElementById('priority').value;

    const lists = document.createElement('li');
    lists.textContent = taskText ;

    if (priority === 'high') {
      lists.style.color = 'red';
      } else if (priority === 'medium') {
        lists.style.color = 'orange';
      } else {lists.style.color = 'green'};

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = '❌';
    deleteBtn.style.cursor = 'pointer'
    deleteBtn.addEventListener('click', () => {
      lists.remove();
    });

    lists.appendChild(deleteBtn)
    tasks.appendChild(lists)
    form.reset();
  });
});

