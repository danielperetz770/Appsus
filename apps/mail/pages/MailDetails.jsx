

export function MailDetails({ selectedMail }) {

    return (
        <ul className="mail-details">
            <section className="container">
                <li className="mail-list">
                    <div className="mail-details flex column">
                        <div className="mail-heading">
                            <h2>{selectedMail.subject}</h2>
                        </div>
                        <p>{selectedMail.body}</p>
                        <span>{selectedMail.from}</span>
                        <span>{selectedMail.to}</span>
                        <span>sent :{new Date(selectedMail.sentAt).toLocaleString()}</span>
                        <div className="forward-answer-btn">
                            <button className="forward">Forward</button>
                            <button className="answer">Answer</button>
                        </div>
                    </div>
                </li>
            </section>
        </ul>
    )
}