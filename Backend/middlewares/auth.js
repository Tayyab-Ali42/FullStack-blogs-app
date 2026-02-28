import jwt from "jsonwebtoken"
import User from '../models/UserModel.js'
export const authMiddleWare = async (req, res, next) => {
    try {
        let token
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {

            // Extract token 

            token = req.headers.authorization.split(" ")[1]

            // verify token
            const decode = jwt.verify(token, process.env.JWT_SECRET)

            const user = await User.findById(decode.id).select("-password")

            if (!user) {
                return res.status(401).json({ message: "Not user found" })
            }
            req.user = user
            next()
        } else {
            return res.status(401).json({ message: "Not authorized, no token" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "server error" })
    }
}