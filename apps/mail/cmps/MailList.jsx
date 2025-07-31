
import { MailPreview } from "../../mail/cmps/MailPreview.jsx";
import { MailFilter } from "./MailFilter.jsx";

// import { MailIndex } from "../pages/MailIndex";
export function MailList({ mails, onSetSelectedMail, selectedMail, DeleteMail, handleSetFilter,setMails }) {

function onInputChange(ev){
    const txt = ev.target.value
    handleSetFilter({txt})
}

    return (
        <React.Fragment>
            <div className="header flex space-between align-center">
                <div className="search-bar">
                    <img className="google-pic" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_rtl_r5.png"></img>
                </div>
                <div className="picture">
                    <input className="search-input" type="text" placeholder="Search in Gmail" onChange={onInputChange} />
                </div>
            </div>
            {/* {!selectedMail && <MailFilter/>} */}
            <ul className="mail-list">
                {mails.map(mail =>
                    <MailPreview
                        DeleteMail={DeleteMail}
                        key={mail.id}
                        mail={mail}
                        onSetSelectedMail={onSetSelectedMail}
                        selectedMail={selectedMail}
                        setMails={setMails}
                        />
                )}
            </ul >
        </React.Fragment>
    )
}
