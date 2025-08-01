export function NoteHeader({ filterBy, OnFilterBy, onReload }) {
  function handleChange(e) {
    const newFilterBy = { ...filterBy, txt: e.target.value }
    OnFilterBy(newFilterBy)
  }

  return (
    <header className="note-header flex">
      <img className="logo" src="icon/keep-assets/asset 0.png" alt="icon" />
      <div className="note-controls">
        <input
          type="text"
          placeholder="Search notes... "
          value={filterBy.txt}
          onChange={handleChange}
        />
        <img className="search-icon" src="icon/keep-assets/asset 8.svg" alt="" />
        <button className="btn-header-load-icon" onClick={onReload}>
          <img src="icon/keep-assets/asset 20.svg" alt="" />
        </button>
      </div>
    </header>
  )
}
