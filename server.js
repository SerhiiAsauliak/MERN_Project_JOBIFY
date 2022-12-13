import express from 'express'
import dotenv from 'dotenv'
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import connectDB from './db/connect.js';

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    // throw new Error('some error')
    res.send('Welcome!')
})

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
            .then(() => console.log('success DB connect'))
            .catch((err) => console.log('DB error', err))
        app.listen(PORT, () => {
            console.log(`Server worked on PORT: ${PORT}`)
        })  

    } catch (error) {
        console.log(error)
    }
}

start()
