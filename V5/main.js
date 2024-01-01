var todos = [
  {todoText: 'Item 1', completed: false},
  {todoText: 'Item 2', completed: false},
  {todoText: 'Item 3', completed: false}
];

console.log(todos);

function addText(newText) {
  todos.push({todoText: newText, completed: false});
  console.log(todos);
}

function editText(index, changeText){
  todos[index].todoText = changeText;
  console.log(todos);
}

function delText(index){
  todos.splice(index, 1);
  console.log(todos);
}

function todoComplete(index) {
  if (todos[index].completed === false) {
    todos[index].completed = true;
  } else {
    todos[index].completed = false;
  }
  console.log(todos);
}