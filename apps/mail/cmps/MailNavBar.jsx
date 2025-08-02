import { MailCompose } from "../cmps/MailCompose.jsx"
import { MailList } from "./MailList.jsx"


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
                <img className="google-pic" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_rtl_r5.png"></img>
                <p className="new-mail" onClick={() => toggleIsCompose(true)}>New Message</p>
                <div className="mail-count">
                    <p className="inbox">Inbox</p>
                    <span>{unreadCount}</span>
                </div>
                <p className="stared">Stared</p>
                <p className="sent">Sent</p>
            </div>
        </div>
    )
}