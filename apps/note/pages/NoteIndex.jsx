const { useState, useEffect } = React
import { noteService } from '../../note/services/note.service.js'
import { NotePreview } from '../cmps/NotePreview.jsx'

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query()
            .then(notes => {
                console.log('Loaded notes:', notes)
                setNotes(notes)
            })
            .catch(err => console.error('Failed to load notes', err))
            .finally(() => setIsLoading(false))
    }

    if (isLoading) return <div className="loading">Loading notes...</div>
    if (!notes.length) return <div className="no-notes">No notes to show.</div>

    return (
        <section className="note-index">
            <header className="note-header">
                <h2>Notes List</h2>
            </header>

            <ul className="note-list">
                {notes.map(note => (
                    <li key={note.id} className="note-item">
                        <NotePreview note={note} />
                    </li>
                ))}
            </ul>
        </section>
    )
}