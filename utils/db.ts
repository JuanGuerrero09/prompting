import mongoose from "mongoose";

let isConnected = false

const MONGODB_URI = process.env.MONGODB_URI ?? 'NONE'

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected){
        console.log('mongodb is already connected')
        return
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: 'share_prompt',
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })
        isConnected = true
        console.log('mongodb connected')
    } catch (error) {
        console.log(error)
    }
}