import User from "../models/userModel.js"
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        // check excisting user
        const user = await User.findOne({ email })

        if (user) {
            return res.status(409).json({ message: "User already exists" })
        }


        const hashedPassword = await bcrypt.hash(password, 10)



        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save()

        return res.status(201).json({ message: "User registered successfully" })
    } catch (error) {
        return res.status(500).json({ message: "Server error", error })
    }
}