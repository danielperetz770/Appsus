import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onRemove, onUpdateNote, onTogglePin }) {

    const pinnedNotes = notes.filter(note => note.isPinned)
    const unpinnedNotes = notes.filter(note => !note.isPinned)

    return (
        <div className="note-list-container">
            {pinnedNotes.length > 0 && (
                <section className="notes-list grid">
                    <h2>Pinned Notes</h2>
                    {pinnedNotes.map(note => (
                        <article key={note.id}>
                            <NotePreview
                                note={note}
                                onRemove={onRemove}
                                onUpdateNote={onUpdateNote}
                                onTogglePin={onTogglePin}
                            />
                        </article>
                    ))}
                </section>
            )}

            <section className="notes-list grid">
                <h2> Notes</h2>
                {unpinnedNotes.map(note => (
                    <article key={note.id}>
                        <NotePreview
                            note={note}
                            onRemove={onRemove}
                            onUpdateNote={onUpdateNote}
                            onTogglePin={onTogglePin}
                        />
                    </article>
                ))}
            </section>
        </div>
    )
}
