import { MailCompose } from "../cmps/MailCompose.jsx"


export function MailNavBar({onAddMail}) {
    const { useState } = React

    const [isCompose, setIsCompose] = useState(false)

    function showForm() {
        setIsCompose(true)
    }

    function closeForm() {
        setIsCompose(false)
    }


    return (
        <div className="side-header-container">
            <div className="new-mail" onClick={showForm}>New Message</div>
            <div className="inbox">Inbox</div>
            <div className="stared">Stared</div>
            <div className="sent">Sent</div>
            {isCompose && <MailCompose
                closeForm={closeForm}
                onAddMail={onAddMail}
            />}
        </div>
    )
}