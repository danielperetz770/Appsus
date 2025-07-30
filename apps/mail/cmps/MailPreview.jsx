
// import { AppHeader } from "../../../cmps/AppHeader.jsx";

export function MailPreview({ mail, onSetSelectedMail, selectedMail,key }) {


    return (
        <React.Fragment>
            <li key={key}
                className={`flex ${mail.isRead ? "not-bold" : "bold"}`}
                onClick={() => onSetSelectedMail(mail)}>
                <p>{mail.subject}</p>
                <p>from:{mail.from}</p>
            </li>
            <hr className="seperator"></hr>
        </React.Fragment>
    )
}