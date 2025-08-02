import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onRemove, onUpdateNote, onTogglePin }) {

    const pinnedNotes = notes.filter(note => note.isPinned)
    const unpinnedNotes = notes.filter(note => !note.isPinned)

    return (
        <div className="note-list-container">
            <h2>Pinned Notes</h2>
            {pinnedNotes.length > 0 && (
                <section className="notes-list grid">
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

                <h2> Notes</h2>
            <section className="notes-list grid">
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
