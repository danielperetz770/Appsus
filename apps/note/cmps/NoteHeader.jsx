

export function NoteHeader({ searchTerm, setSearchTerm, onReload }) {
    return (
        <header className="note-header">
            <img className="logo" src="icon/keep-assets/asset 0.png" alt="icon" />
            <div className="note-controls">
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={onReload}><img src="icon/keep-assets/asset 20.svg" alt="" className="header-load-icon" /></button>
            </div>
        </header>
    )
}