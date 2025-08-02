
export function MailCompose({ toggleIsCompose, onAddMail }) {


    function addMailToList(ev) {
        ev.preventDefault()
        const newMail = {
            id: '',
            to: ev.target.to.value,
            subject: ev.target.subject.value,
            body: ev.target.body.value,
            from: 'yan46@gmail.com',
            sentAt: Date.now(),
            isRead: false
        }
        onAddMail(newMail)
        toggleIsCompose(false)
    }

    return (
        <div className="mail-compose">
            <h2>New Message</h2>
            <form className="flex column gap" onSubmit={addMailToList}>
                <input className="insert-mail" type="email" placeholder="To" name="to" required />
                <hr></hr>
                <input type="text" className="insert-mail" placeholder="Subject" name="subject" />
                <hr></hr>
                <textarea name="body" className="insert-mail" placeholder="Write your message..." rows="10" />
                

                <div className="form-actions flex space-between">
                    <button type="submit" className="btn send">Send</button>
                    <button type="button" className="btn close" onClick={()=>toggleIsCompose(false)}>x</button>
                </div>
            </form>
        </div>
    )
}
