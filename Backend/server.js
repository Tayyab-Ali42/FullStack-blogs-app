import app from "./app.js";
import dotevn from "dotenv"

dotevn.config()

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
