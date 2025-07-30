// import { NoteTxt } from './NoteTxt.jsx'
// import { NoteImg } from './NoteImg.jsx'
// import { NoteTodos } from './NoteTodos.jsx'

export function NotePreview({ note }) {
  return (
    <article className="note-preview">
      <h3>{note.info.title || 'No Title'}</h3>
      {note.type === 'NoteTxt' && <p>{note.info.txt}</p>}
      {note.type === 'NoteImg' && <img src={note.info.url} alt={note.info.title} />}
      {note.type === 'NoteTodos' && (
        <ul>
          {note.info.todos.map((todo, idx) => (
            <li key={idx} className={todo.doneAt ? 'done' : ''}>{todo.txt}</li>
          ))}
        </ul>
      )}
    </article>
  )
}