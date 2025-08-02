
import { mailService } from "../services/mail.service.js";
import { MailList } from "../../mail/cmps/MailList.jsx";
import { MailDetails } from "../pages/MailDetails.jsx";
import { MailCompose } from "../cmps/MailCompose.jsx";
import { MailNavBar } from "../cmps/MailNavBar.jsx";



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
        mailService.save(newMail).then(savedMail => {
            setMails(prevMails => [savedMail, ...prevMails]);
        });
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

    function handleFilterChange(newFilter) {
        setFilterBy(newFilter)
    }

    function onToggleStar(mail) {
        const updatedMail = { ...mail, isStarred: !mail.isStarred }
        mailService.save(updatedMail).then(savedMail => {
            setMails(mails => mails.map(m => m.id === savedMail.id ? savedMail : m))
        })
    }

    const unreadCount = mails.filter(mail => !mail.isRead).length;

    if (!mails || !mails.length) return <div className="loader">loading...</div>
    return (
        <div className="mail-index">
            <MailNavBar
                filterBy={filterBy}
                handleFilterChange={handleFilterChange}
                unreadCount={unreadCount}
                toggleIsCompose={setIsCompose} />
            {!selectedMail && <MailList
                onToggleStar={onToggleStar}
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
            {isCompose && <MailCompose onAddMail={onAddMail} toggleIsCompose={setIsCompose} />}
        </div>
    )
}
