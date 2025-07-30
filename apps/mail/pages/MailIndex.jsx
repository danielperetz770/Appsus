
import { mailService } from "../services/mail.service.js";
const { useState, useEffect } = React

export function MailIndex() {

    const [mails, setMails] = useState([])


    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query()
            .then(mails => setMails(mails))
            .catch(err => console.log('failed to load', err))
    }
    if (!mails || !mails.length) return <div>loading...</div>
    return (
        <React.Fragment>
            <section className="container">Mail app
                <ul className="mail-list">
                    {mails.map(mail => (
                        <li key={mail.id} className="mail">
                            <p>subject:{mail.subject}</p>
                            <p>{mail.body}</p>
                            <p>{mail.isRead}</p>
                            <p>from:{mail.from}</p>
                            <p>time sent:{mail.sentAt}</p>
                        </li>
                    ))
                    }
                </ul>
            </section>
        </React.Fragment>
    )
}
