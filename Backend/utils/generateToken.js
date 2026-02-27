import jwt from "jsonwebtoken"
export const generateToken = (id, email) => {
    return jwt.sign(
        { id, email },   // payload
        process.env.JWT_SECRET,               // secret from .env
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
}