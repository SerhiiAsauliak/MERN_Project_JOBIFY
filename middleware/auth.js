import {UnauthenticatedError} from '../errors/index.js';
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        throw new UnauthenticatedError('Invalid authentication')
    }    

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        const testUser = payload.userId === '63b3035b29159fe4cccb5d70'
        req.user = {userId: payload.userId, testUser}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Invalid authentication')
    }
}

export default auth