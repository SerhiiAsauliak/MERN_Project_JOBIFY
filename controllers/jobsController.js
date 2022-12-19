import { StatusCodes } from 'http-status-codes'
import {BadRequestError, NotFoundError} from './../errors/index.js'
import Job from '../model/Job.js'

const createJob = async (req, res) => {
    const {company, position} = req.body
    if(!position || !company){
        throw new BadRequestError('Please provide all values')
    }
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const deleteJob = async (req, res) => {
    res.send('delete job')
}
const updateJob = async (req, res) => {
    res.send('update job')
}
const getAllJobs = async (req, res) => {
    res.send('get all jobs')
}
const showStats = async (req, res) => {
    res.send('show stats')
}


export {createJob, deleteJob, updateJob, getAllJobs, showStats}