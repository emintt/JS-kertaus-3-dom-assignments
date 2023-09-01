/* Open t2 folder in your IDE/editor. The assignment remains unchanged from
the first, except that for this version, DOM methods are used to add the todo
items.

for attribute is added to <label> with htmlFor
4p */
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

for (todo of todoList) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.type = 'checkbox';
  input.id = 'todo-' + todo.id;
  input.checked = todo.completed;


  label.htmlFor = 'todo-' + todo.id;
  const t = document.createTextNode(`${todo.task}`);
  label.appendChild(t);

  li.appendChild(input);
  li.appendChild(label);
  document.querySelector('ul').appendChild(li);
}
