
import { mailService } from "../services/mail.service.js";
import { MailList } from "../../mail/cmps/MailList.jsx";
import { MailDetails } from "../pages/MailDetails.jsx";
// import { MailCompose } from "../cmps/MailCompose.jsx";
import { MailNavBar } from "../cmps/MailNavBar.jsx";
import { MailFilter } from "../cmps/MailFilter.jsx";


const { useState, useEffect } = React

export function MailIndex() {

    const [mails, setMails] = useState([])
    const [selectedMail, setSelectedMail] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        loadMails()
    }, [filterBy])

    function onAddMail(newMail) {
        setMails(prevMails => [newMail, ...prevMails])
    }

    function onSetSelectedMail(mail) {
        setSelectedMail(mail)
    }

    function DeleteMail(mailToDelete) {
        setMails(prevMails => prevMails.filter(mail => mail.id !== mailToDelete.id))
    }


    function loadMails() {
        mailService.query(filterBy)
            .then(mails => setMails(mails))
            .catch(err => console.log('failed to load', err))
    }

    function handleSetFilter(newFilterBy) {
        setFilterBy(newFilterBy)
    }

    const unreadCount = mails.filter(mail => !mail.isRead).length;

    if (!mails || !mails.length) return <div className="loader">loading...</div>
    return (
        <React.Fragment>
            <MailNavBar 
            unreadCount={unreadCount}
            onAddMail={onAddMail} />
            {!selectedMail && <MailList
            handleSetFilter={handleSetFilter}
                DeleteMail={DeleteMail}
                mails={mails}
                onSetSelectedMail={onSetSelectedMail}
                selectedMail={selectedMail}
            />}
            {selectedMail && <MailDetails selectedMail={selectedMail} />}
        </React.Fragment>
    )
}
