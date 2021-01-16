const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
  title: {
    type: String,
    required: true,
    maxlength: [40, 'Title cannot be more than 40 characters']
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, 'Description cannot be more than 200 characters']
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const taskModel = mongoose.model('Tasks', TaskSchema);

module.exports = taskModel;
