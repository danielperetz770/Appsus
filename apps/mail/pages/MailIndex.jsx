
import { mailService } from "../services/mail.service.js";
import { MailList } from "../../mail/cmps/MailList.jsx";
import { MailDetails } from "../pages/MailDetails.jsx";
import { MailCompose } from "../cmps/MailCompose.jsx";
import { AppSideHeader } from "../cmps/AppSideHeader.jsx";


const { useState, useEffect } = React

export function MailIndex() {

    const [mails, setMails] = useState([])
    const [selectedMail, setSelectedMail] = useState(null)

    useEffect(() => {
        loadMails()
    }, [])

    function onSetSelectedMail(mail) {
        setSelectedMail(mail)
    }

    function loadMails() {
        mailService.query()
            .then(mails => setMails(mails))
            .catch(err => console.log('failed to load', err))
    }

    if (!mails || !mails.length) return <div>loading...</div>
    if (selectedMail) return <MailDetails selectedMail={selectedMail} />
    return (
        <React.Fragment>
            <AppSideHeader/>
            <MailList
                mails={mails}
                onSetSelectedMail={onSetSelectedMail}
                selectedMail={selectedMail}
            />
        </React.Fragment>
    )
}
