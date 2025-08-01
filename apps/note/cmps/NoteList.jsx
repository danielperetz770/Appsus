import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onRemove, onUpdateNote }) {
    return (
        <section className="notes-list grid">
            {notes.map(note => (
                <article key={note.id} >
                    <NotePreview note={note} onRemove={onRemove} onUpdateNote={onUpdateNote} />
                </article>
            ))}
        </section>

    )
}
