import express from 'express'
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"

const app = express()


// middlewares 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/auth", userRoutes)


export default app