import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDb connected successfully")
    } catch (error) {
        console.log("Database connection error", error)
        process.exit(1)
    }
}


export default connectDb