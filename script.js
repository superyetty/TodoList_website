const todoList = [{ }];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    console.log(dueDate);

    const html = `
      <div class>${name}</div>
      <div>${dueDate}</div>
      <button class="js-todo-delete delete-button" 
      onclick="todoList.splice(${i}, 1)
      console.log('deleted')
      renderTodoList()
      ">
        Delete
      </button>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector(".js-todo-display").innerHTML = todoListHTML;
}

function addTodo() {
  console.log("clicked");
  const inputEl = document.querySelector(".js-input");
  const name = inputEl.value;

  const dateEl = document.querySelector(".js-date-input");
  const dueDate = dateEl.value;

  todoList.push({
    name: name,
    dueDate: dueDate,
  });
  console.log(todoList);

  renderTodoList();

  inputEl.value = "";
  dateEl.value = "";
}
