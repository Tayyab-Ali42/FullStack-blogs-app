import Post from "../models/PostModel.js"

export const createPost = async (req, res) => {
    try {
        const { title, content, image } = req.body
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content required" })
        }

        const newPost = new Post({
            title,
            content,
            image,
            // author: req.user._id
        })

        await newPost.save()

        return res.status(201).json({ message: "Post created successfully" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" })
    }
}