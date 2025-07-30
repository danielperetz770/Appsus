import { MailCompose } from "../cmps/MailCompose"


export function AppSideHeader() {
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
            <div className="Inbox">Inbox</div>
            <div className="Stared">Stared</div>
            <div className="Sent">Sent</div>
            {isCompose && <MailCompose
                closeForm={closeForm}
            />}
        </div>
    )
}