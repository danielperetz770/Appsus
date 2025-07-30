

export function NoteTodos({ info }) {
    return (
        <ul>
            {info.todos.map((todo, idx) => (
                <li key={idx} className={todo.doneAt ? 'done' : ''}>{todo.txt}</li>
            ))}
        </ul>
    )
}