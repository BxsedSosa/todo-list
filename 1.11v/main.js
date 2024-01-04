var todos = [
  {todoText: 'Item 1', completed: false},
  {todoText: 'Item 2', completed: false},
  {todoText: 'Item 3', completed: false}
];
displayTodos()

var toggleAllButton = document.getElementById('btn-toogle-all');
toggleAllButton.addEventListener('click', allComplete);

var addButton = document.getElementById('btn-add');
var addInput = document.getElementById('inputAdd');
addButton.addEventListener('click', addText);

// var editButton = document.getElementById('btn-edit');
// var editIndexInput = document.getElementById('edit-position-input');
// var editInput = document.getElementById('edit-text-input');
// editButton.addEventListener('click', editText);



function addText() {
  var initialTodoText = addInput.value;
  todos.push({todoText: initialTodoText, completed: false});
  displayTodos();
  addInput.value = '';
}

// function editText(){
//   var index = editIndexInput.value;
//   var changeText = editInput.value;
//   todos[index].todoText = changeText;
//   displayTodos();
// }


function delText(event){
  var str = event.target.id;
  var index = str.split('-')
  todos.splice(index[1],1);
  displayTodos();
}

function todoComplete(event) {
  var index = event.target.id.split('-');
  if (todos[index[1]].completed === false) {
    todos[index[1]].completed = true;
  } else {
    todos[index[1]].completed = false;
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
    remvBtn.id = `rem-${i}`;
    remvBtn.innerText = 'rmv'
    remvBtn.addEventListener('click', delText)
    
    var togBtn = document.createElement('button');
    togBtn.id = `tog-${i}`;
    togBtn.innerText = 'toggle'
    togBtn.addEventListener('click', todoComplete)

    todoLi.appendChild(togBtn);
    todoLi.appendChild(remvBtn);
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

function quiz(text) {
  var newText = '';
  for (var i = 0; i < text.length; i++) {
    if (text[i] === '-') {
      newText += '--';
    } else {
      newText += text[i];
    }
  }
  return ('--' + newText + '--') .split('-');
}