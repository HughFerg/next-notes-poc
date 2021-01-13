import Note from '../models/Note'
import dbConnect from '../utils/dbConnect'

dbConnect()

export async function fetchAllNotesData() {
    try {
        const notes = await Note.find({})
        return { notes: notes, error: null }
    } catch (err) {
        console.log(err)
        return { notes: [], error: err }
    }
}

export default fetchAllNotesData