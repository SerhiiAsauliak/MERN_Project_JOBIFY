import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'
import 'express-async-errors'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'

import cookieParser from 'cookie-parser'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

import connectDB from './db/connect.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

//routes
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

const PORT = process.env.PORT || 5000
const app = express()

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(cookieParser())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

app.get('/', (req, res) => {
    res.json({msg: 'Welcome!'})
})
app.get('/api/v1', (req, res) => {
    res.json({msg: 'API!'})
})

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './client/build')))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  })

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`Server worked on PORT: ${PORT}`)
        })  

    } catch (error) {
        console.log(error)
    }
}

start()
