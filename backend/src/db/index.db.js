import mongoose from "mongoose";
const DB_NAME = "genv-ai"

const { MONGO_URI } = process.env

const dbConnection = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${MONGO_URI}${DB_NAME}`)
        console.log("Database connected")
    } catch (error) {
        console.log("Error while connecting to database", error)
    }
}

export default dbConnection