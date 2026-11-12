const mongoose = require("mongoose")
const colo = require("colo")

async function ConnectToMongo() {
    try {
        if (!process.env.MONGO_DB) {
            throw new Error(colo.red("MONGO_DB environment variable is not set in .env file"));
        }
        
        await mongoose.connect(process.env.MONGO_DB)
        console.log(colo.green("Connected to MongoDB successfully"))
    } catch (error) {
        console.error(colo.red("MongoDB Connection Error:"))
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = ConnectToMongo