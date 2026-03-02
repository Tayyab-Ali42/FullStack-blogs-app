import express from "express"
import { addComment, getComments } from "../controllers/commentController.js"
import { authMiddleWare } from "../middlewares/auth.js"


const router = express.Router()




router.post("/:postId/comments", authMiddleWare, addComment)
router.get("/:postId/comments", authMiddleWare, getComments)


export default router