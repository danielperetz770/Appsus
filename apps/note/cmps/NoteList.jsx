const { Link } = ReactRouterDOM

import { NotePreview } from "./NotePreview.jsx"


export function NoteList({ notes, onRemove }) {
    console.log('notes in NoteList:', notes)
    return (
        <section className="notes-list grid">

            {notes.map(note => (
                <article key={note.id} className="note-preview">
                    <NotePreview note={note} />
                    <button onClick={() => onRemove(note.id)} className="btn-remove">🗑</button>
                </article>
            ))}

        </section>
    )
}