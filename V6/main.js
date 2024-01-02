var todos = [
  {todoText: 'Item 1', completed: false},
  {todoText: 'Item 2', completed: false},
  {todoText: 'Item 3', completed: false}
];

displayTodos();


function addText(newText) {
  todos.push({todoText: newText, completed: false});
  displayTodos();
}

function editText(index, changeText){
  todos[index].todoText = changeText;
  displayTodos();
}

function delText(index){
  todos.splice(index, 1);
  displayTodos();
}

function todoComplete(index) {
  if (todos[index].completed === false) {
    todos[index].completed = true;
  } else {
    todos[index].completed = false;
  }
  displayTodos();
}

function displayTodos() {
  for (let i=0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}
