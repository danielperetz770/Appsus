
export function NoteHeader({ filterBy, OnFilterBy, onReload }) {
    return (
        <header className="note-header flex">
            <img className="logo" src="icon/keep-assets/asset 0.png" alt="icon" />
            <div className="note-controls">
                <input
                    type="text"
                    placeholder="Search notes... "
                    value={filterBy}
                    onChange={() => OnFilterBy()}
                />
                <img className="search-icon" src="icon/keep-assets/asset 8.svg" alt="" />
                <button className="btn-header-load-icon" onClick={onReload}><img src="icon/keep-assets/asset 20.svg" alt="" /></button>
            </div>
        </header>
    )
}