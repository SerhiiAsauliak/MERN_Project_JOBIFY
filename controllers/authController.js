import { StatusCodes } from 'http-status-codes';
import User from "../model/User.js"

class CustomAPIError extends Error {
    constructor(message) {
        super(message)
    }
}

class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

const register = async (req, res) => {
    const {name, password, email} = req.body
    if(!name || !email || !password){
        throw new BadRequest('Please provide all values')
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
