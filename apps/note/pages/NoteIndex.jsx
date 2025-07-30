import { noteService } from '../../note/services/note.service.js'
import { NotePreview } from '../cmps/NotePreview.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'

const { useState, useEffect } = React




export function NoteIndex() {
    console.log('NoteIndex component rendered')

    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        console.log('useEffect started')
        loadNotes()
    }, [])

    function loadNotes() {
        setIsLoading(true)
        noteService.query()
            .then(notes => {
                console.log('Loaded notes from service:', notes)
                setNotes(notes)
            })
            .catch(err => console.error('Failed to load notes', err))
            .finally(() => setIsLoading(false))
    }

    const filteredNotes = notes.filter(note =>
        note.info && note.info.title && note.info.title.toLowerCase().includes(searchTerm.toLowerCase())
    )



    console.log('test')

    return (
        <section className="note-index">
            <NoteHeader
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onReload={loadNotes}
            />

            {isLoading ? (
                <div className="loading">Loading notes...</div>
            ) : !filteredNotes.length ? (
                <div className="no-notes">No notes to show.</div>
            ) : (
                <div className="notes-container">
                    {filteredNotes.map(note => (
                        <NotePreview key={note.id} note={note} />
                    ))}
                </div>
            )}
        </section>
    )
}