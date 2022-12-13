import 'express-async-errors'
import express from 'express'
import dotenv from 'dotenv'
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import connectDB from './db/connect.js';
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()



app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.use(express.json())
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)
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
