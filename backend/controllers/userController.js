import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'

export const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login user
export const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await userModel.login(email, password)
        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

// signup user
export const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await userModel.signup(email, password)
        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


