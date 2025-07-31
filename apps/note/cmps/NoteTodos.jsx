// // NoteTodos.jsx
// export function NoteTodos({ todos, onToggleTodo }) {
//   return (
//     <ul>
//       {todos.map((todo, idx) => (
//         <li key={idx} className={todo.doneAt ? 'done' : ''}>
//           <label>
//             <input
//               type="checkbox"
//               checked={!!todo.doneAt}
//               onChange={() => onToggleTodo(idx)}
//             />
//             {todo.txt}
//           </label>
//         </li>
//       ))}
//     </ul>
//   )
// }
