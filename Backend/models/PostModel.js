import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: ""
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            user: "User"
        }
    ],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    // comments: [
    //     {
    //         user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //         content: { type: String, required: true },
    //         createdAt: { type: Date, default: Date.now }
    //     }
    // ]
},
    { timestamps: true }
)


const Post = mongoose.model("Post", postSchema)

export default Post