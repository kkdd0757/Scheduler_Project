// let todos = [
//   { id: 3, content: '알고리즘', completed: true },
//   { id: 2, content: '지식창고', completed: false },
//   { id: 1, content: 'TS공부', completed: false }
// ];

// const $yearMonth = document.querySelector('.year-month');
// const $newTodo = document.querySelector('.new-todo');
// const $todoList = document.querySelector('.todo-list');

// const render = () => {
//   // 이 부분에 현재 date 받아온거 넣으면 됨 (나중에) 현재는 하드코딩 '2021/10/19'
//   $yearMonth.textContent = '2021/10/19';

//   $todoList.innerHTML = todos
//     .map(
//       ({ id, content, completed }) => `
//     <li data-id="${id}">
//         <div class="view">
//         <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
//         <label>${content}</label>
//         <button class="destroy"></button>
//         </div>
//     </li>`
//     )
//     .join('');
// };

// const setTodo = newTodo => {
//   todos = newTodo;
//   render();
// };

// const generateId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

// const addTodo = content => {
//   setTodo([{ id: generateId(), content, completed: false }, ...todos]);
// };

// const toggleTodoCompleted = id => {
//   setTodo(todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)));
// };

// const removeTodo = id => {
//   setTodo(todos.filter(todo => todo.id !== +id));
// };

// // window.addEventListener('DOMContentLoaded', render);

// $newTodo.onkeyup = e => {
//   if (e.key !== 'Enter' || e.target.value.trim() === '') return;

//   addTodo(e.target.value);

//   e.target.value = '';
// };

// $todoList.onchange = e => {
//   if (!e.target.classList.contains('toggle')) return;

//   toggleTodoCompleted(e.target.closest('li').dataset.id);
// };

// $todoList.onclick = e => {
//   if (!e.target.classList.contains('destroy')) return;

//   removeTodo(e.target.closest('li').dataset.id);
// };

// export default setTodo;
