
// import { AppHeader } from "../../../cmps/AppHeader.jsx";
const { useState, useEffect } = React


export function MailPreview({ mail, onSetSelectedMail, selectedMail, DeleteMail, setMails }) {

    function handleDeleteMail(ev) {
        ev.stopPropagation()
        DeleteMail(mail)
    }

    function toggleReadUnRead(ev) {
        ev.stopPropagation()
        setMails(prevMails => prevMails.map(msg => msg.id === mail.id ? { ...msg, isRead: !msg.isRead } : msg))

    }

    return (
        <React.Fragment>
            <li
                className={`flex align-center ${mail.isRead ? "not-bold" : "bold"}`}
                onClick={() => onSetSelectedMail(mail)}>
                <p>{mail.subject}</p>
                <p>{mail.body}</p>
                <div className="delete-is-read">
                    <button className="read" onClick={toggleReadUnRead}>
                        {mail.isRead ? <img  src="../../../assets/css/pics/isRead.svg"/> : <img src="../../../assets/css/pics/unRead.svg"/>}
                    </button>
                    <button className="delete" onClick={handleDeleteMail}><img src="../../../assets/css/pics/Delete.svg"></img></button>
                </div>
            </li>
            {/* <hr className="seperator"></hr> */}
        </React.Fragment>
    
    )
}