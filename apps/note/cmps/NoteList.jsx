import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onRemove, onUpdateNote }) {
    return (
        <section className="notes-list grid">
            {notes.map(note => (
                <article key={note.id} >
                    <NotePreview note={note} onUpdateNote={onUpdateNote} />
                    <button onClick={() => onRemove(note.id)} className="btn-remove">
                        <img src="icon/keep-assets/asset 18.svg" alt="" />
                    </button>
                </article>
            ))}
        </section>

    )
}
