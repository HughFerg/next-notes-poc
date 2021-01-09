import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
    if (connection.isConnection) {
        return
    }

    const uri = "mongodb+srv://${PROCESS.ENV.MONGO_USER}:${PROCESS.ENV.MONGO_PASS}@notes.fblcs.mongodb.net/${PROCESS.ENV.MONGO_DEFAULT_DB}?retryWrites=true&w=majority";
    const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnection = db.connections[0].readyState
    console.log(connection.isConnection)
}


export default dbConnect