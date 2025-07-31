// import { NoteTxt } from './NoteTxt.jsx'
// import { NoteImg } from './NoteImg.jsx'

// import { NoteTodos } from './NoteTodos.jsx'

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

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
