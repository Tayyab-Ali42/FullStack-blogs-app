import User from "../models/UserModel.js"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js"

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

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const token = generateToken(user._id)


        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error", error })
    }
}