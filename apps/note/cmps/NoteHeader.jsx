

export function NoteHeader({ searchTerm, setSearchTerm, onReload }) {
    return (
        <header className="note-header">
            <h2>Notes List</h2>
            <div className="note-controls">
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={onReload}>🔄</button>
                <button onClick={() => alert('Settings clicked!')}>⚙️</button>
            </div>
        </header>
    )
}