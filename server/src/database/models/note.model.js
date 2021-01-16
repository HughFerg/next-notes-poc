const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Users',
    },
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    content: {
        type: String,
        required: true,
        // maxlength: [200, 'Description cannot be more than 200 characters']
    }
})

module.exports = mongoose.model.Note || mongoose.model('Note', NoteSchema)