


export function MailNavBar({ toggleIsCompose, unreadCount, handleFilterChange, filterBy }) {

    return (
        <div className="side-header-container">
            <div className="inner-container">
                <img className="google-pic" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_rtl_r5.png"></img>
                <p className="new-mail" onClick={() => toggleIsCompose(true)}>New Message</p>
                <div className="mail-count">
                    <p className={`inbox ${filterBy.type === '' ? 'active' : ''}`} onClick={() => handleFilterChange({ type: '' })}>Inbox</p>
                    <span>{unreadCount}</span>
                </div>
                <p className={`stared ${filterBy.type === 'stared' ? 'active' : ''}`} onClick={() => handleFilterChange({ type: 'stared' })}>Stared</p>
                <p className={`sent ${filterBy.type === 'sent' ? 'active' : ''}`} onClick={() => handleFilterChange({ type: 'sent' })}>Sent</p>
            </div>
        </div>
    )
}