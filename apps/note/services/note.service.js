import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => {
                    const textToSearch = note.info.title || note.info.txt || ''
                    return regExp.test(textToSearch)
                })
            }
            return notes
        })
}


function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote() {
    return {
        id: utilService.makeId(),
        type: 'NoteTxt',
        isPinned: false,
        info: { title: '', txt: '' },
        style: { backgroundColor: '#fff' }
    }
}


function getDefaultFilter() {
    return { txt: '' }
}

function _createNotes() {
    const notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        utilService.saveToStorage(NOTE_KEY, _createDemoNotes())
    }
    console.log('notes', notes)
}

function _createDemoNotes() {
    const now = Date.now()

    return [
        {
            id: 'n201',
            createdAt: now + 1,
            type: 'NoteTxt',
            isPinned: true,
            style: { backgroundColor: '#f4a261' },
            info: {
                txt: 'Learning React is fun!'
            }
        },
        {
            id: 'n202',
            createdAt: now + 2,
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'https://picsum.photos/id/1025/300/200',
                title: 'Me and the ocean'
            },
            style: { backgroundColor: '#2a9d8f' }
        },
        {
            id: 'n203',
            createdAt: now + 3,
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Weekend checklist',
                todos: [
                    { txt: 'Clean the house', doneAt: null },
                    { txt: 'Build portfolio', doneAt: 1651234567890 }
                ]
            }
        },
        {
            id: 'n204',
            createdAt: now + 4,
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Weekend checklist',
                todos: [
                    { txt: 'Clean the house', doneAt: null },
                    { txt: 'Build portfolio', doneAt: 1651234567890 }
                ]
            }
        },
        {
            id: 'n205',
            createdAt: now + 5,
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Weekend checklist',
                todos: [
                    { txt: 'Clean the house', doneAt: null },
                    { txt: 'Build portfolio', doneAt: 1651234567890 }
                ]
            }
        },
        {
            id: 'n209',
            createdAt: now + 9,
            type: 'NoteTodos',
            isPinned: true,
            info: {
                title: 'Weekend checklist',
                todos: [
                    { txt: 'Clean the house', doneAt: null },
                    { txt: 'Build portfolio', doneAt: 1651234567890 }
                ]
            }
        },
        {
            id: 'n208',
            createdAt: now + 8,
            type: 'NoteImg',
            isPinned: true,
            info: {
                url: 'https://plus.unsplash.com/premium_photo-1663926032043-7908766f5c52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlfGVufDB8fDB8fHww',
                title: 'Cute puppy'
            },
            style: { backgroundColor: '#09ff2a4b' }
        },
        {
            id: 'n207',
            createdAt: now + 7,
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Study Plan',
                todos: [
                    { txt: 'Review JavaScript', doneAt: null },
                    { txt: 'Practice React', doneAt: null }
                ]
            }
        },
        {
            id: 'n210',
            createdAt: now + 10,
            type: 'NoteImg',
            isPinned: true,
            info: {
                title: 'Study Plan',
                url: 'https://media.istockphoto.com/id/498571761/photo/checklist-and-pen.webp?a=1&b=1&s=612x612&w=0&k=20&c=vDnEI2Nu24t6yGHIkiKq1oNePXc5DxBOyCN_UAhwkoY=',

            }
        },
        {
            id: 'n206',
            createdAt: now + 6,
            type: 'NoteImg',
            isPinned: true,
            info: {
                url: 'https://picsum.photos/id/237/300/200',
                title: 'Cute puppy'
            },
            style: { backgroundColor: '#e9c46a' }
        },
    ]
}


// function _createNote(title) {
//     note.id = makeId()
//     const note = getEmptyNote(id, title)
//     return note
// }

