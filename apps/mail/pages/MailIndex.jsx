
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
            <div className="header flex space-between align-center">
                <div className="search-bar">
                    <img className="google-pic" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_rtl_r5.png"></img>
                </div>
                <div className="picture">
                    <input type="text" placeholder="Search in Gmail" />
                </div>
            </div>
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
