import { StatusCodes } from 'http-status-codes';
import User from "../model/User.js"
import {BadRequestError, UnauthenticatedError} from './../errors/index.js';

const register = async (req, res) => {
    const {name, password, email} = req.body

    if(!name || !email || !password){
        throw new BadRequestError('Please provide all values')
    }

    const userAlreadyExist = await User.findOne({email})

    if(userAlreadyExist){
        throw new BadRequestError('This email already in use')
    }

    const user = await User.create({name, password, email})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED)
        .json({
            user:{
                email:user.email,
                lastName:user.lastName,
                location:user.location,
                name:user.name,
            }, 
            token,
            location: user.location})
}

const login = async (req, res) => {
    const {email, password } = req.body

    if(!email || !password){
        throw new BadRequestError('Please provide all values')
    }
    const user = await User.findOne({email}).select('+password') //add password
    if(!user) {
        throw new UnauthenticatedError('Invalid credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT()
    user.password = undefined  //remove password from client response
    res.status(StatusCodes.OK).json({user, token, location: user.location})
}

const updateUser = async (req, res) => {
    res.send('updateUser')
}


export {register, login, updateUser}
