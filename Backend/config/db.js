import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/blogs")
        console.log("MongoDb connected successfully")
    } catch (error) {
        console.log("Database connection error", error)
        process.exit(1)
    }
}


export default connectDb