import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    }
}, {
    timestamps: true
});

// 🔥 index for fast querying comments by post
commentSchema.index({ post: 1 });

export const Comment = mongoose.model("Comment", commentSchema);