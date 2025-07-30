const { useState } = React


export function NoteAdd({ onAddNote }) {
    const [title, setTitle] = useState('')

    function handleSubmit(ev) {
        ev.preventDefault()
        if (!title.trim()) return

        const newNote = {
            type: 'NoteTxt',
            info: {
                title,
                txt: ''
            },
            isPinned: false,
            style: { backgroundColor: '#fff' }
        }


        onAddNote(newNote)
        setTitle('')
    }

    return (
        <form className="note-add" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new note..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="btn-add">
                <img src="icon/keep-assets/asset 10.svg" alt="Add" />
            </button>
        </form>
    )
}
