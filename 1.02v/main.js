// todos before (before the code is ran i believe that todo still initialize then put in the array of elements that are being called for 100%) (undefined)
var todos = ['Item 1','Item 2','Item 3'];
// todos after (todos would have the 3 elements placed into the array 100%) (0: "Item 1"1: "Item 2"2: "Item 3")

console.log(todos);
//(['Item 1','Item 2','Item 3'] 100%) (['Item 1', 'Item 2', 'Item 3'])

//function to add new text into array
function addText(newText) {
  todos.push(newText);
  console.log(todos);
}

//function lets you edit text
function editText(index, changeText){
  todos[index] = changeText;
  console.log(todos);
}

//function lets you delete elements from array
function delText(index){
  todos.splice(index, 1);
  console.log(todos);
}