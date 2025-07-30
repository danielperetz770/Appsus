

export function MailDetails({ selectedMail }) {

    return (
        <ul className="single-mail">
            <section className="container">
                <li className="mail-list">
                    <div className="mail-details flex column">
                        <h2>{selectedMail.subject}</h2>
                        <p>{selectedMail.body}</p>
                        <span>{selectedMail.from}</span>
                        <span>{selectedMail.to}</span>
                        <span>{selectedMail.sentAt}</span>
                    </div>
                </li>
            </section>
        </ul>
    )
}