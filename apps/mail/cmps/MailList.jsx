
import { MailPreview } from "../../mail/cmps/MailPreview.jsx";
// import { MailIndex } from "../pages/MailIndex";


export function MailList({ mails, onSetSelectedMail, selectedMail }) {

    return (
        <React.Fragment>
            <div className="header flex space-between align-center">
                <div className="search-bar">
                    <img className="google-pic" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_rtl_r5.png"></img>
                </div>
                <div className="picture">
                    <input className="search-input" type="text" placeholder="Search in Gmail" />
                </div>
            </div>
            <ul className="mail-list">
                {mails.map(mail =>
                    <MailPreview
                        key={mail.id}
                        mail={mail}
                        onSetSelectedMail={onSetSelectedMail}
                        selectedMail={selectedMail} />
                )}
            </ul >
        </React.Fragment>
    )
}
