var todos = [
  {todoText: 'Item 1', completed: false},
  {todoText: 'Item 2', completed: false},
  {todoText: 'Item 3', completed: false}
];
displayTodos()

var displayTodosButton = document.getElementById('btn-display');
displayTodosButton.addEventListener('click',displayTodos);

var toggleAllButton = document.getElementById('btn-toogle-all');
toggleAllButton.addEventListener('click', allComplete);

var addButton = document.getElementById('btn-add');
var addInput = document.getElementById('inputAdd');
addButton.addEventListener('click', addText);

var editButton = document.getElementById('btn-edit');
var editIndexInput = document.getElementById('edit-position-input');
var editInput = document.getElementById('edit-text-input');
editButton.addEventListener('click', editText);

// var rmvBtn = document.getElementById('btn-remove');
// var rmvInpt = document.getElementById('remove-input');
// rmvBtn.addEventListener('click',delText);

var togbtn = document.getElementById('btn-toggle');
var toginpt = document.getElementById('tog-input')
togbtn.addEventListener('click', todoComplete)




function addText() {
  var initialTodoText = addInput.value;
  todos.push({todoText: initialTodoText, completed: false});
  displayTodos();
  addInput.value = '';
}

function editText(){
  var index = editIndexInput.value;
  var changeText = editInput.value;
  todos[index].todoText = changeText;
  displayTodos();
}

// function delText(){
//   var rmvindx = rmvInpt.value
//   todos.splice(rmvindx, 1);
//   displayTodos();
// }

function delText(event){
  var pos = event.target.id;
  todos.splice(pos,1)
  displayTodos()
}


function todoComplete() {
  var index = toginpt.value
  if (todos[index].completed === false) {
    todos[index].completed = true;
  } else {
    todos[index].completed = false;
  }
  displayTodos();
}

function displayTodos() {
  var todosUl = document.getElementById('boss');
  todosUl.innerHTML= '';
  
  
  for (var i=0; i<todos.length; i++) {
    var todoLi = document.createElement('li');

    if (todos[i].completed === true) {
      todoLi.innerText = `[X] ${todos[i].todoText}`;
    } else {
      todoLi.innerText =`[ ] ${todos[i].todoText}`;
    }

    var remvBtn = document.createElement('button');
    remvBtn.id = i;
    remvBtn.innerText = 'rmv'
    remvBtn.addEventListener('click', delText)
    

    todoLi.appendChild(remvBtn)
    todosUl.appendChild(todoLi);
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

