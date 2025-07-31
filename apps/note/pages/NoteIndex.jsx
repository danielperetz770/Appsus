const { useState, useEffect } = React

import { noteService } from '../../note/services/note.service.js'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { NoteAdd } from '../cmps/NoteAdd.jsx'
import { NoteList } from '../cmps/NoteList.jsx'

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
        noteService
            .query()
            .then(notes => {
                console.log('Loaded notes from service:', notes)
                setNotes(notes)
            })
            .catch(err => console.error('Failed to load notes', err))
            .finally(() => setIsLoading(false))
    }

    function handleRemoveNote(noteId) {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
    }

    function handleUpdateNote(updatedNote) {
        setNotes(prevNotes => prevNotes.map(note => (note.id === updatedNote.id ? updatedNote : note)))
    }

    const filteredNotes = notes.filter(note =>
        note.info && note.info.title && note.info.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    function onAddNote(newNote) {
        noteService
            .save(newNote)
            .then(savedNote => {
                setNotes(prevNotes => [savedNote, ...prevNotes])
            })
            .catch(err => console.error('Failed to add note', err))
    }

    return (
        <section className="note-index">
            <NoteHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} onReload={loadNotes} />

            <NoteAdd onAddNote={onAddNote} />

            {isLoading ? (
                <div className="loading">
                    <span className="material-symbols-outlined spin">autorenew</span>
                </div>

            ) : !filteredNotes.length ? (
                <div className="no-notes">No notes to show</div>
            ) : (
                <NoteList notes={filteredNotes} onRemove={handleRemoveNote} onUpdateNote={handleUpdateNote} />
            )}

        </section>
    )

}
