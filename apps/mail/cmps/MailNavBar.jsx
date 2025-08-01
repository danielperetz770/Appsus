import { MailCompose } from "../cmps/MailCompose.jsx"


export function MailNavBar({ toggleIsCompose, unreadCount }) {
    const { useState } = React

    function showForm() {
        setIsCompose(true)
    }

    function closeForm() {
        setIsCompose(false)
    }


    return (
        <div className="side-header-container">
            <div className="inner-container">
                <p className="new-mail" onClick={()=>toggleIsCompose(true)}>New Message</p>
                <div className="mail-count">
                    <p className="inbox">Inbox</p>
                    <span>{unreadCount}</span>
                </div>
                <p className="stared">Stared</p>
                <p className="sent">Sent</p>
                {/* {isCompose && <MailCompose
                    closeForm={closeForm}
                    onAddMail={onAddMail}
                />} */}
            </div>
        </div>
    )
}