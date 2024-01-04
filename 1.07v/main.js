var todos = [
  {todoText: 'Item 1', completed: false},
  {todoText: 'Item 2', completed: false},
  {todoText: 'Item 3', completed: false}
];

var displayTodosButton = document.getElementById('btn-display');
displayTodosButton.addEventListener('click',displayTodos);

var toggleAllButton = document.getElementById('btn-toogle-all');
toggleAllButton.addEventListener('click', allComplete);



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

