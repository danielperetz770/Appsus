
export function MailCompose({ closeForm }) {

    return (
        <div className="compose-form">
            <h2>New Message</h2>
            <form className="flex column gap">
                <input type="email" placeholder="To" name="to" required />
                <hr></hr>
                <input type="text" placeholder="Subject" name="subject" />
                <hr></hr>
                <textarea name="body" placeholder="Write your message..." rows="10" />
                <hr></hr>

                <div className="form-actions flex space-between">
                    <button type="submit" className="btn send">Send</button>
                    <button type="button" className="btn close" onClick={closeForm}>x</button>
                </div>
            </form>
        </div>
    )
}
