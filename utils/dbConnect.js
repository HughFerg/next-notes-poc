import mongoose from 'mongoose'
const connection = {}

async function dbConnect() {
    if (connection.isConnection) {
        return
    }

    const uri = "mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASS + "@notes.fblcs.mongodb.net/" + process.env.MONGO_DEFAULT_DB + "?retryWrites=true&w=majority";
    const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnection = db.connections[0].readyState
    console.log(connection.isConnection)
}

export default dbConnect