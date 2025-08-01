
import { mailService } from "../services/mail.service.js";
import { MailList } from "../../mail/cmps/MailList.jsx";
import { MailDetails } from "../pages/MailDetails.jsx";
import { MailCompose } from "../cmps/MailCompose.jsx";
import { MailNavBar } from "../cmps/MailNavBar.jsx";
import { MailFilter } from "../cmps/MailFilter.jsx";


const { useState, useEffect } = React

export function MailIndex() {

    const [mails, setMails] = useState([])
    const [selectedMail, setSelectedMail] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [sortBy, setSortBy] = useState('')
    const [isCompose, setIsCompose] = useState(false)


    useEffect(() => {
        loadMails()
    }, [filterBy])

    useEffect(() => {
        if (!sortBy) return
        let sortedMails = [...mails]
        if (sortBy === 'subject') {
            sortedMails.sort((a, b) => a.subject.localeCompare(b.subject))
        } else if (sortBy === 'date') {
            sortedMails.sort((a, b) => b.sentAt - a.sentAt)
        }
        setMails(sortedMails)
    }, [sortBy])

    function onAddMail(newMail) {
        setMails(prevMails => [newMail, ...prevMails])
    }

    function onSetSelectedMail(mail) {
        setSelectedMail(mail)
    }

    function DeleteMail(mailToDelete) {
        mailService.remove(mailToDelete.id)
            .then(() => setMails(prevMails => prevMails.filter(mail => mail.id !== mailToDelete.id)))
            .catch(err => console.log('unable to remove', err))
    }

    function loadMails() {
        mailService.query(filterBy)
            .then(mails => setMails(mails))
            .catch(err => console.log('failed to load', err))
    }

    function handleSetFilter(newFilterBy) {
        setFilterBy(newFilterBy)
    }

    function onSetSortBy(newSortBy) {
        setSortBy(newSortBy)
    }

    const unreadCount = mails.filter(mail => !mail.isRead).length;

    if (!mails || !mails.length) return <div className="loader">loading...</div>
    return (
        <div className="general-container">
            <MailNavBar
                unreadCount={unreadCount}
                 toggleIsCompose={setIsCompose} />
            {!selectedMail && <MailList
                handleSetFilter={handleSetFilter}
                DeleteMail={DeleteMail}
                mails={mails}
                onSetSelectedMail={onSetSelectedMail}
                selectedMail={selectedMail}
                setMails={setMails}
                onSetSortBy={onSetSortBy}
                sortBy={sortBy}
            />}
            {selectedMail && <MailDetails
                selectedMail={selectedMail} />}
           {isCompose && <MailCompose onAddMail={onAddMail} toggleIsCompose={setIsCompose}/>}
        </div>
    )
}
