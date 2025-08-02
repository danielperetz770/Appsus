// import { ColorInput } from './ColorInput.jsx'

// export function NotePreview({ note, onRemove, onUpdateNote, onTogglePin }) {

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
//         ...(note.style || {}),
//         ...newStyle
//       }
//     }
//     onUpdateNote(updatedNote)
//   }

//   function onTogglePin(noteId) {
//     setNotes(prevNotes =>
//       prevNotes.map(note =>
//         note.id === noteId ? { ...note, isPinned: !note.isPinned } : note
//       )
//     )
//   }


//   return (
//     <section className="note-preview" style={note.style}>
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

//       {note.type === 'NoteTxt' && <p>{note.info.txt}</p>}
//       {note.type === 'NoteImg' && <img src={note.info.url} alt={note.info.title} />}
//       <ColorInput
//         onSetColorStyle={handleSetColor}
//         backgroundColor={note.style && note.style.backgroundColor}
//       />
//       <button onClick={() => onRemove(note.id)} className="btn-remove">
//         <img src="icon/keep-assets/asset 18.svg" alt="" />
//       </button>

//       <button className="pin-btn" onClick={() => onTogglePin(note.id)}>
//         <img
//           src={note.isPinned ? "icon/keep-assets/pin-filled.svg" : "icon/keep-assets/pin-outline.svg"}
//           alt="Pin"
//         />
//       </button>


//     </section>
//   )

// }



import { ColorInput } from './ColorInput.jsx'

export function NotePreview({ note, onRemove, onUpdateNote, onTogglePin }) {

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

      {note.type === 'NoteTxt' && <p>{note.info.txt}</p>}
      {note.type === 'NoteImg' && <img src={note.info.url} alt={note.info.title} />}
      <ColorInput
        onSetColorStyle={handleSetColor}
        backgroundColor={note.style && note.style.backgroundColor}
      />
      <button onClick={() => onRemove(note.id)} className="btn-remove">
        <img src="icon/keep-assets/asset 18.svg" alt="" />
      </button>

      <button className="pin-btn" onClick={() => onTogglePin(note.id)}>
        <img
          src={note.isPinned ? "icon/keep-assets/asset 50.svg" : "icon/keep-assets/asset 37.svg"}
          alt="Pin"
        />
      </button>

    </section>
  )
}
