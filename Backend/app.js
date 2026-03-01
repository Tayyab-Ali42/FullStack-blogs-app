import express from 'express'
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import commentRoutes from "./routes/commentsRoutes.js"

const app = express()


// middlewares 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/auth", userRoutes)
app.use("/api", postRoutes)
app.use("/posts", commentRoutes)


export default app