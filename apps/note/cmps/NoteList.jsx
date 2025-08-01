import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onRemove, onUpdateNote }) {

    const pinnedNotes = notes.filter((note) => note.isPinned)
    const unpinnedNotes = notes.filter((note) => !note.isPinned)




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
