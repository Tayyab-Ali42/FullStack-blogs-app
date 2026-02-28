import Post from "../models/PostModel.js"

export const createPost = async (req, res) => {
    try {
        const { title, content, image } = req.body
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content required" })
        }

        // console.log(req.user.id)

        const newPost = new Post({
            title,
            content,
            image,
            author: req.user._id
        })

        await newPost.save()

        return res.status(201).json({ message: "Post created successfully" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" })
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()

        if (posts.length === 0) {
            return res.status(400).json({ message: "There isn't any blog posted yet" })
        }

        return res.status(200).json({
            message: "Posts fetched successfully",
            count: posts.length,
            posts
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" })
    }
}


export const getSinglePost = async (req, res) => {
    try {
        const postId = req.params.id

        const post = await Post.findById(postId)


        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }

        return res.status(200).json({
            title: post.title,
            content: post.content,
            image: post.image,
            author: post.author,
            likes: post.likes,
            createdAt: post.createdAt
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" })
    }
} 