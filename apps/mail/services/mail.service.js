import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'

_createMails()


export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getDefaultFilter,
}

function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regExp.test(mail.vendor))
            }
            if (filterBy.minSpeed) {
                mails = mails.filter(mail => mail.speed >= filterBy.minSpeed)
            }
            return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
        .then(mail => _setNextPrevMailId(mail))
}

function remove(mailId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail(vendor = '', speed = '') {
    return { vendor, speed }
}

function getDefaultFilter() {
    return { txt: '', minSpeed: '' }
}


function _setNextPrevMailId(mail) {
    return query().then((mails) => {
        const mailIdx = mails.findIndex((currMail) => currMail.id === mail.id)
        const nextMail = mails[mailIdx + 1] ? mails[mailIdx + 1] : mails[0]
        const prevMail = mails[mailIdx - 1] ? mails[mailIdx - 1] : mails[mails.length - 1]
        mail.nextMailId = nextMail.id
        mail.prevMailId = prevMail.id
        return mail
    })
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: 'm101',
                createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
                subject: 'האם נוכל להיפגש השבוע?',
                body: `היי דניאל,

                רציתי לבדוק אם אתה פנוי להיפגש השבוע לצורך סיכום הפרויקט.
                אפשר ביום רביעי אחר הצהריים או חמישי בבוקר – מה נוח לך?

                 תודה מראש,
                 רותם`,
                isRead: false,
                sentAt: Date.now() - 1000 * 60 * 60 * 24 * 2 + 5000,
                removedAt: null,
                from: 'rot@company.com',
                to: 'user@appsus.com'
            },
            {
                id: 'm102',
                createdAt: Date.now() - 1000 * 60 * 60 * 36,
                subject: 'System Maintenance Notice',
                body: `Dear User,

                Please be informed that we will be performing scheduled system maintenance tonight from 11:00 PM to 3:00 AM.

                During this time, access to your dashboard and email may be limited.
                We apologize for any inconvenience and thank you for your understanding.

                Sincerely,  
                Tech Support`,
                isRead: true,
                sentAt: Date.now() - 1000 * 60 * 60 * 36 + 8000,
                removedAt: null,
                from: 'support@system.com',
                to: 'user@appsus.com'
            },
            {
                id: 'm103',
                createdAt: Date.now() - 1000 * 60 * 60 * 8,
                subject: 'תזכורת: פגישת צוות בשעה 14:00',
                body: `חברים שלום,

                רק תזכורת לפגישת הצוות שתתקיים היום ב־14:00 בחדר ישיבות 3.
                נא להגיע בזמן ולהביא את עדכון המשימות שלכם.

                תודה,
                תומר`,
                isRead: false,
                sentAt: Date.now() - 1000 * 60 * 60 * 8 + 3000,
                removedAt: null,
                from: 'tom@company.com',
                to: 'team@appsus.com'
            },
            {
                id: 'm104',
                createdAt: Date.now() - 1000 * 60 * 60 * 24,
                subject: 'Project Proposal Attached',
                body: `Hi Sarah,

                Attached is the updated project proposal for your review.
                Let me know if you have any feedback or if you'd like to schedule a call to go over it together.

                Best,  
                James`,
                isRead: true,
                sentAt: Date.now() - 1000 * 60 * 60 * 24 + 7000,
                removedAt: null,
                from: 'james@consulting.io',
                to: 'sarah@client.com'
            },
            {
                id: 'm105',
                createdAt: Date.now() - 1000 * 60 * 20,
                subject: 'קבלת חשבונית חודשית',
                body: `שלום רב,

                החשבונית החודשית עבור שירותי אחסון נשלחה לתיבת המייל שלך.
                לפרטים נוספים ניתן להיכנס לאזור האישי באתר או לפנות לתמיכה.

                בברכה,
                צוות השירות`,
                isRead: false,
                sentAt: Date.now() - 1000 * 60 * 20 + 1000,
                removedAt: null,
                from: 'billing@hosting.co.il',
                to: 'user@appsus.com'
            }
        ]

        utilService.saveToStorage(MAIL_KEY, mails)
    }
    console.log(mails)
}



// function _createMail(vendor, speed = 250) {
//     const mail = getEmptyMail(vendor, speed)
//     mail.id = makeId()
//     return mail
// }
// mail service