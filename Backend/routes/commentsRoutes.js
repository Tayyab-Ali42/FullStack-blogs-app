import express from "express"
import { addComment } from "../controllers/commentController.js"
import { authMiddleWare } from "../middlewares/auth.js"


const router = express.Router()




router.post("/:postId/comments", authMiddleWare, addComment)



export default router