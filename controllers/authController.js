import { StatusCodes } from 'http-status-codes';
import User from "../model/User.js"
import BadRequestError from './../errors/bad_request.js';

const register = async (req, res) => {
    const {name, password, email} = req.body

    if(!name || !email || !password){
        throw new BadRequestError('Please provide all values')
    }

    const userAlreadyExist = await User.findOne({email})

    if(userAlreadyExist){
        throw new BadRequestError('this email already in use')
    }

    const user = await User.create({name, password, email})
    res.status(StatusCodes.CREATED).json({user})
}

const login = async (req, res) => {
    res.send('login')
}

const updateUser = async (req, res) => {
    res.send('updateUser')
}


export {register, login, updateUser}
