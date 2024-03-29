var todos = [
  {todoText: 'Item 1', completed: false},
  {todoText: 'Item 2', completed: false},
  {todoText: 'Item 3', completed: false}
];

var displayTodosButton = document.getElementById('btn-display');
displayTodosButton.addEventListener('click',displayTodos);

var toggleAllButton = document.getElementById('btn-toogle-all');
toggleAllButton.addEventListener('click', allComplete);

var addButton = document.getElementById('btn-add');
var addInput = document.getElementById('inputAdd');
addButton.addEventListener('click', addText);

var editButton = document.getElementById('btn-edit')
var editIndexInput = document.getElementById('edit-position-input')
var editInput = document.getElementById('edit-text-input')
addButton.addEventListener('click', editText)

function addText() {
  var initialTodoText = addInput.value;
  todos.push({todoText: initialTodoText, completed: false});
  displayTodos();
  addInput.value = '';
}

// function editText(index, changeText){
//   todos[index].todoText = changeText;
//   displayTodos();
// }

function editText(){
  var index = editIndexInput.value;
  var changeText = editInput.value;
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
  console.clear()
  for (let i=0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}

function allComplete() {

  var completedTodos = 0;

  for (let i=0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      completedTodos++
    }

    if(completedTodos === todos.length) {
      for (let i = 0; i < todos.length; i++){
        todos[i].completed = false;
      } 
    } else {
        todos[i].completed = true;
    }

  }
  displayTodos()
}

