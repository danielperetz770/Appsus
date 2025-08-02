
// import { AppHeader } from "../../../cmps/AppHeader.jsx";
const { useState, useEffect } = React


export function MailPreview({ mail, onSetSelectedMail, onToggleStar, DeleteMail, setMails }) {

    function handleDeleteMail(ev) {
        ev.stopPropagation()
        DeleteMail(mail)
    }

    function toggleReadUnRead(ev) {
        ev.stopPropagation()
        setMails(prevMails => prevMails.map(msg => msg.id === mail.id ? { ...msg, isRead: !msg.isRead } : msg))

    }

    function toggleStared(ev) {
        ev.stopPropagation()
        onToggleStar(mail)
    }


    return (
        <React.Fragment>
            <li
                className={`mail-preview ${mail.isRead ? "not-bold" : "bold"}`}
                onClick={() => onSetSelectedMail(mail)}>

                <div className="star-subject-wrapper">
                    <button
                        onClick={toggleStared}
                        className={mail.isStarred ? "starred" : ""}>
                        <img className="star" src="assets/pics/star.svg" />
                    </button>

                    <p className="mail-subject">{mail.subject}</p>
                </div>

                <p className="mail-body">{mail.body}</p>
                <p className="time-preview">{new Date(mail.sentAt).toLocaleDateString()}</p>

                <div className="delete-is-read">
                    <button className="read" onClick={toggleReadUnRead}>
                        {mail.isRead ? <img src="assets/pics/isRead.svg" /> : <img src="assets/pics/unRead.svg" />}
                    </button>
                    <button className="delete" onClick={handleDeleteMail}>
                        <img src="assets/pics/Delete.svg" />
                    </button>
                </div>
            </li>
        </React.Fragment>

    )
}