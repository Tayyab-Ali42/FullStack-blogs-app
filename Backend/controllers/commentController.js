import { Comment } from "../models/comment.model.js"
import Post from "../models/PostModel.js"

export const addComment = async (req, res) => {
    try {

        const postId = req.params.postId
        const { text } = req.body
        const userId = req.user._id




        const CommentedPost = await Post.findById(postId)


        if (!CommentedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (!text) {
            return res.status(404).json({ message: "Text is required" });

        }


        const comment = new Comment({
            text,
            user: userId,
            post: postId
        })

        await comment.save()



        return res.status(201).json(comment)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" })
    }
}

export const getComments = async (req, res) => {
    try {
        const postId = req.params.postId
        const { page, limit } = req.query
        const skip = (page - 1) * limit


        // validate post
        const post = await Post.findById(postId)

        if (!post) {
            return res.status(404).json({ message: 'Post not found' })
        }

        const comments = await Comment.find({ post: postId }).sort({ createdAt: - 1 }).skip(skip).limit(limit).populate("user", "name email");
        res.json({
            comments
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error", error })
    }
}