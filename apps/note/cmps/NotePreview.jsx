// import { NoteTxt } from './NoteTxt.jsx'
// import { NoteImg } from './NoteImg.jsx'
// import { NoteTodos } from './NoteTodos.jsx'

// import { ColorInput } from './ColorInput.jsx'


// export function NotePreview({ note, onUpdateNote }) {

//   function toggleTodoDone(idx) {
//     const newTodos = note.info.todos.map((todo, i) => {
//       if (i === idx) {
//         return {
//           ...todo,
//           doneAt: todo.doneAt ? null : Date.now(),
//         }
//       }
//       return todo
//     })

//     onUpdateNote({ ...note, info: { ...note.info, todos: newTodos } })
//   }

//   function handleSetColor(newStyle) {
//     const updatedNote = {
//       ...note,
//       style: {
//         ...note.style,
//         ...newStyle
//       }
//     }
//     onUpdateNote(updatedNote)
//   }

//   return (
//     <React.Fragment>
//       <h3>{note.info.title || 'No Title'}</h3>

//       {note.type === 'NoteTodos' && (
//         <ul>
//           {note.info.todos.map((todo, idx) => (
//             <li key={idx} className={todo.doneAt ? 'done' : ''}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={!!todo.doneAt}
//                   onChange={() => toggleTodoDone(idx)}
//                 />
//                 {todo.txt}
//               </label>
//             </li>
//           ))}
//         </ul>
//       )}
//       <ColorInput
//         onSetColorStyle={handleSetColor}
//         backgroundColor={note.style?.backgroundColor}
//       />

//       {note.type === 'NoteTxt' && <p>{note.info.txt}</p>}
//       {note.type === 'NoteImg' && <img src={note.info.url} alt={note.info.title} />}
//     </React.Fragment>
//   )
// }



import { ColorInput } from './ColorInput.jsx'

export function NotePreview({ note, onUpdateNote }) {

  function toggleTodoDone(idx) {
    const newTodos = note.info.todos.map((todo, i) => {
      if (i === idx) {
        return {
          ...todo,
          doneAt: todo.doneAt ? null : Date.now(),
        }
      }
      return todo
    })

    onUpdateNote({ ...note, info: { ...note.info, todos: newTodos } })
  }

  function handleSetColor(newStyle) {
    const updatedNote = {
      ...note,
      style: {
        ...(note.style || {}),
        ...newStyle
      }
    }
    onUpdateNote(updatedNote)
  }

  return (
    <section className="note-preview" style={note.style}>
      <h3>{note.info.title || 'No Title'}</h3>

      {note.type === 'NoteTodos' && (
        <ul>
          {note.info.todos.map((todo, idx) => (
            <li key={idx} className={todo.doneAt ? 'done' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={!!todo.doneAt}
                  onChange={() => toggleTodoDone(idx)}
                />
                {todo.txt}
              </label>
            </li>
          ))}
        </ul>
      )}
      <ColorInput
        onSetColorStyle={handleSetColor}
        backgroundColor={note.style && note.style.backgroundColor}
      />

      {note.type === 'NoteTxt' && <p>{note.info.txt}</p>}
      {note.type === 'NoteImg' && <img src={note.info.url} alt={note.info.title} />}
    </section>
  )
}
