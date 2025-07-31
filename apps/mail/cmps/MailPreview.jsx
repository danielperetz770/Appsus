
// import { AppHeader } from "../../../cmps/AppHeader.jsx";
const { useState, useEffect } = React


export function MailPreview({ mail, onSetSelectedMail, selectedMail, DeleteMail}) {

    function handleDeleteMail(ev) {
        ev.stopPropagation()
        DeleteMail(mail)

    }

    return (
        <React.Fragment>
            <li
                className={`flex ${mail.isRead ? "not-bold" : "bold"}`}
                onClick={() => onSetSelectedMail(mail)}>
                <p>{mail.subject}</p>
                <p>from:{mail.body}</p>
                <button onClick={handleDeleteMail}>Delete</button>
            </li>
            <hr className="seperator"></hr>
        </React.Fragment>
    )
}