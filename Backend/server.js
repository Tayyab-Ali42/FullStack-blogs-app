import app from "./app.js";
import dotevn from "dotenv"
import connectDb from "./config/db.js";

dotevn.config()

// connect Db
connectDb()

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
