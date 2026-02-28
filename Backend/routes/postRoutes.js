import express from 'express'
import { createPost, getPosts, getSinglePost } from '../controllers/postController.js'
import { authMiddleWare } from '../middlewares/auth.js'


const router = express.Router()


router.post("/post/create", authMiddleWare, createPost)
router.get("/posts", getPosts)
router.get("/posts/:id", authMiddleWare, getSinglePost)

export default router