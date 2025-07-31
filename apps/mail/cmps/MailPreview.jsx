
// import { AppHeader } from "../../../cmps/AppHeader.jsx";
const { useState, useEffect } = React


export function MailPreview({ mail, onSetSelectedMail, selectedMail, DeleteMail,setMails }) {

    function handleDeleteMail(ev) {
        ev.stopPropagation()
        DeleteMail(mail)
    }

    function toggleReadUnRead(ev) {
        ev.stopPropagation()
        setMails(prevMails => prevMails.map(msg => msg.id === mail.id ? {...msg,isRead: !msg.isRead} : msg))

}

    return (
        <React.Fragment>
            <li
                className={`flex ${mail.isRead ? "not-bold" : "bold"}`}
                onClick={() => onSetSelectedMail(mail)}>
                <p>{mail.subject}</p>
                <p>from:{mail.body}</p>
                <button className="read" onClick={toggleReadUnRead}>
                    {mail.isRead ? '📤' : '📩'}
                    </button>
                <button onClick={handleDeleteMail}>Delete</button>
            </li>
            <hr className="seperator"></hr>
        </React.Fragment>
    )
}