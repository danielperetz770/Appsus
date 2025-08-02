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
                mails = mails.filter(mail => regExp.test(mail.body))
            }
            // if (filterBy.minSpeed) {
            //     mails = mails.filter(mail => mail.speed >= filterBy.minSpeed)
            // }
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
                to: 'user@appsus.com',
                isStarred: false
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
                to: 'user@appsus.com',
                isStarred: false
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
                to: 'team@appsus.com',
                isStarred: false
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
                to: 'sarah@client.com',
                isStarred: false
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
                to: 'user@appsus.com',
                isStarred: false
            },

            {
                id: 'm106',
                createdAt: Date.now() - 1000 * 60 * 45,
                subject: '¡Oferta exclusiva para ti!',
                body: `Hola,

                Tenemos una oferta limitada por tiempo exclusivo solo para nuestros suscriptores.
                Accede a descuentos de hasta un 50% en productos seleccionados.

                Saludos,
                Equipo de Ventas`,
                isRead: false,
                sentAt: Date.now() - 1000 * 60 * 45 + 1200,
                removedAt: null,
                from: 'ventas@ofertas.com',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm107',
                createdAt: Date.now() - 1000 * 60 * 60 * 4,
                subject: 'עדכון אבטחה חשוב',
                body: `שלום,

                מערכת האבטחה שלנו זיהתה ניסיון כניסה לחשבונך ממיקום לא מזוהה.
                אם זו לא הייתה אתה, אנא שנה את הסיסמה שלך מיד.

                בברכה,
                צוות התמיכה`,
                isRead: true,
                sentAt: Date.now() - 1000 * 60 * 60 * 4 + 800,
                removedAt: null,
                from: 'security@safeapp.com',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm108',
                createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
                subject: 'Welcome to CodeVerse!',
                body: `Hey Developer,

                We're thrilled to have you join CodeVerse!
                Start building your first project today and connect with thousands of developers.

                Happy Coding!
                – CodeVerse Team`,
                isRead: false,
                sentAt: Date.now() - 1000 * 60 * 60 * 24 * 3 + 2500,
                removedAt: null,
                from: 'team@codeverse.dev',
                to: 'newuser@appsus.com',
                isStarred: false
            },
            {
                id: 'm109',
                createdAt: Date.now() - 1000 * 60 * 90,
                subject: 'תזכורת לתשלום',
                body: `לקוח יקר,

                עדיין לא התקבל תשלום עבור חשבונית מספר 4582.
                נא להסדיר את התשלום עד לתאריך 5.8.2025.

                בברכה,
                מחלקת הנהלת חשבונות`,
                isRead: false,
                sentAt: Date.now() - 1000 * 60 * 90 + 1500,
                removedAt: null,
                from: 'billing@bizmail.co.il',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm110',
                createdAt: Date.now() - 1000 * 60 * 60 * 12,
                subject: 'Your flight itinerary is ready',
                body: `Dear John,

                Your upcoming flight to Paris is confirmed.
                Please find your itinerary attached and arrive at the airport 3 hours prior to departure.

                Bon voyage!
                AirNow`,
                isRead: true,
                sentAt: Date.now() - 1000 * 60 * 60 * 12 + 3000,
                removedAt: null,
                from: 'noreply@airnow.com',
                to: 'john.doe@appsus.com',
                isStarred: false
            },
            {
                id: 'm111',
                createdAt: Date.now() - 1000 * 60 * 20,
                subject: 'Re: Lunch tomorrow?',
                body: `Sounds perfect! Let’s meet at the new Italian place near your office.
                How about 12:30?

                – Emma`,
                isRead: false,
                sentAt: Date.now() - 1000 * 60 * 20 + 500,
                removedAt: null,
                from: 'emma.friends@socialmail.com',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm112',
                createdAt: Date.now() - 1000 * 60 * 60 * 72,
                subject: 'תודה על השתתפותך בכנס',
                body: `שלום רב,

                אנו מודים לך על השתתפותך בכנס החדשנות 2025.
                המצגות יהיו זמינות להורדה באתר הכנס בשבוע הקרוב.

                להתראות באירועים הבאים!
                צוות הכנס`,
                isRead: true,
                sentAt: Date.now() - 1000 * 60 * 60 * 72 + 1000,
                removedAt: null,
                from: 'conference@eventhub.co.il',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm113',
                createdAt: Date.now() - 1000 * 60 * 15,
                subject: '🎉 Congratulations! You’ve won a prize!',
                body: `Hi!

                You've been selected as the winner of our July giveaway.
                Click here to claim your prize.

                Cheers,
                Giveaway Team`,
                isRead: false,
                sentAt: Date.now() - 1000 * 60 * 15 + 1200,
                removedAt: null,
                from: 'prizes@luckywin.com',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm114',
                createdAt: Date.now() - 1000 * 60 * 10,
                subject: 'אישור הזמנתך התקבל',
                body: `שלום,

                הזמנתך לאוזניות Bluetooth התקבלה בהצלחה.
                מספר הזמנה: #578129

                תודה שרכשת מאיתנו,
                צוות BuyNow`,
                isRead: true,
                sentAt: Date.now() - 1000 * 60 * 10 + 600,
                removedAt: null,
                from: 'orders@buynow.co.il',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm115',
                createdAt: Date.now() - 1000 * 60 * 60 * 6,
                subject: 'Weekly Digest – Top articles for you',
                body: `Hi there,

                 Here are this week’s top articles curated just for you:
                 1. 10 productivity hacks
                 2. React vs Vue – who wins?
                 3. How to manage remote teams

                 Enjoy your read!
                 – The StackTeam`,
                isRead: false,
                sentAt: Date.now() - 1000 * 60 * 60 * 6 + 1800,
                removedAt: null,
                from: 'newsletter@stackmail.com',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm211',
                subject: 'הצעת עבודה - משרת פיתוח React',
                body: `שלום רב,

                שמי דניאל ואני מגייס טכנולוגי בחברת StartTech. ראינו את קורות החיים שלך ומאוד התרשמנו מהניסיון שלך בפיתוח React ו־JavaScript.

                ברצוננו להזמין אותך לתהליך גיוס לתפקיד Frontend Developer במשרה מלאה בתל אביב (אפשרות להיברידיות). מדובר בצוות קטן אך חזק, עם הרבה עצמאות ואחריות.

                אנא עדכן אותנו אם אתה מעוניין, ונשמח לקבוע שיחת היכרות.

                בברכה,
                דניאל גולדמן
                מנהלת גיוס
                StartTech`,
                isRead: false,
                sentAt: 1752546000000,
                createdAt: 1752542400000,
                removedAt: null,
                from: 'daniel@starttech.co.il',
                to: 'user@appsus.com',
                isStarred: true
            },
            {
                id: 'm212',
                subject: 'Important: Final Notice Before Account Suspension',
                body: `Dear Customer,

                We've noticed that your account balance is still unpaid. This is your final reminder before the account will be suspended.

                To avoid any interruption in your services, please submit payment no later than August 5, 2025.

                To pay your balance, visit: https://secure.paynow.com

                If you've already made payment, please disregard this message.

                Sincerely,  
                Billing Department  
                NetLine Services`,
                isRead: true,
                sentAt: 1752632400000,
                createdAt: 1752628800000,
                removedAt: null,
                from: 'billing@netline.com',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm213',
                subject: '¡Felicitaciones! Has sido seleccionado para una beca',
                body: `Hola,

                Nos complace informarte que has sido seleccionado como beneficiario de la beca de innovación tecnológica 2025.

                Tu perfil ha destacado entre cientos de postulantes por tu dedicación y logros académicos. El siguiente paso es asistir a una entrevista virtual.

                Te enviaremos un enlace para coordinar fecha y hora. ¡Enhorabuena!

                Atentamente,  
                Comité de Becas  
                Universidad Innovar`,
                isRead: false,
                sentAt: 1752718800000,
                createdAt: 1752715200000,
                removedAt: null,
                from: 'becas@innovar.edu',
                to: 'user@appsus.com',
                isStarred: true
            },
            {
                id: 'm214',
                subject: 'דו"ח חודשי - תוצאות ותובנות',
                body: `שלום צוות,

                מצורף הדו"ח החודשי הכולל תוצאות הקמפיינים, ניתוח התנהגות המשתמשים ותובנות עיקריות.

                - אחוז ההמרה גדל ב־8% לעומת החודש הקודם.
                - כמות ההרשמות ירדה ב־3% - נדרשת בדיקה של עמוד הנחיתה.
                - הפלטפורמה המובילה: מובייל - 68%.

                מומלץ לקיים ישיבת צוות להצגת הממצאים ודיון בפעולות להמשך.

                בברכה,
                נועה`,
                isRead: false,
                sentAt: 1752805200000,
                createdAt: 1752801600000,
                removedAt: null,
                from: 'noa@marketing360.co.il',
                to: 'user@appsus.com',
                isStarred: false
            },
            {
                id: 'm215',
                subject: 'Your Order Has Been Delivered ✔',
                body: `Hi Sarah,

                We’re happy to let you know that your recent order (#457821) has been delivered.

                **Order Details:**
                - Bluetooth Earbuds x 1
                - Wireless Charger x 1

                We hope you enjoy your purchase! If you have any questions or concerns, feel free to contact our support team anytime.

                Thank you for shopping with us,
                – The TechEase Team`,
                isRead: true,
                sentAt: 1752891600000,
                createdAt: 1752888000000,
                removedAt: null,
                from: 'support@techease.com',
                to: 'sarah@client.com',
                isStarred: false
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