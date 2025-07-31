const { useState } = React

export function NoteAdd({ onAddNote }) {
    const [title, setTitle] = useState("")
    const [showTypeSelect, setShowTypeSelect] = useState(false)
    const [noteType, setNoteType] = useState("NoteTxt")
    const [inputValue, setInputValue] = useState("")

    function handleSubmit(ev) {
        ev.preventDefault()

        if (!inputValue.trim()) return;

        let newNote

        if (noteType === "NoteTxt") {
            newNote = {
                type: "NoteTxt",
                info: {
                    title: title.trim() || "No-title",
                    txt: inputValue,
                },
                style: { backgroundColor: "#fff" },
            };
        } else if (noteType === "NoteTodos") {
            const todoList = inputValue
                .split(",")
                .map((txt) => ({ txt: txt.trim(), doneAt: null }))
            newNote = {
                type: "NoteTodos",
                info: {
                    title: title.trim() || "Title",
                    todos: todoList,
                },
                style: { backgroundColor: "#fff" },
            };
        }

        onAddNote(newNote)
        setTitle("")
        setInputValue("")
        setShowTypeSelect(false)
        setNoteType("NoteTxt")
    }

    function handleKeyDown(ev) {
        if (ev.key === "Enter") {
            ev.preventDefault()
            handleSubmit(ev)
        }
    }

    return (
        <form className="note-add" onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                    if (!showTypeSelect) setShowTypeSelect(true)
                }}
                onFocus={() => {
                    if (!showTypeSelect) setShowTypeSelect(true)
                }}
                autoComplete="off"
                className="note-add__title"
            />

            {showTypeSelect && (
                <select
                    value={noteType}
                    onChange={(e) => setNoteType(e.target.value)}
                    className="note-add__select"
                >
                    <option value="NoteTxt">Note</option>
                    <option value="NoteTodos">Todo-List</option>
                </select>
            )}

            {showTypeSelect && (
                <input
                    type="text"
                    placeholder={
                        noteType === "NoteTxt"
                            ? "Enter notes with commas"
                            : " Todi-list"
                    }
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="note-add__content"
                />
            )}
        </form>
    );
}
