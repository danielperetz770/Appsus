
import { MailPreview } from "../../mail/cmps/MailPreview.jsx";
import { MailFilter } from "./MailFilter.jsx";


// import { MailIndex } from "../pages/MailIndex";
export function MailList({ mails, onSetSelectedMail, selectedMail, DeleteMail,
    handleSetFilter, setMails, onSetSortBy, sortBy }) {

    function onInputChange(ev) {
        const txt = ev.target.value
        handleSetFilter({ txt })
    }

    function onSortChange(ev) {
        onSetSortBy(ev.target.value)
    }

    return (
        <React.Fragment>
            <div className="header">
                <div className="search-container">
                    <img src="assets/pics/Search.svg" alt="Search icon" className="search-icon" />
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search in Gmail"
                        onChange={onInputChange}
                    />
                </div>
            </div>
            {/* {!selectedMail && <MailFilter/>} */}
            <ul className="mail-list">
                <div className="sort-wrapper">
                    <img src="assets/pics/sortPic.svg" alt="Sort icon" className="sort-icon" />
                    <select onChange={(ev) => onSortChange(ev)} className="mail-sort">
                        <option value="">sortBy</option>
                        <option value="subject">Subject</option>
                        <option value="date">Date</option>
                    </select>
                </div>

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
