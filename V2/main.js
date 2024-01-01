var todos = ['Item 1','Item 2','Item 3'];
console.log(todos);

todos.push('Item 4');
console.log(todos);

todos[0] = 'Item 1 updated';
console.log(todos);

todos.splice(0, 1);
console.log(todos)