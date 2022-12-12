import express from 'express'
import dotenv from 'dotenv'
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    // throw new Error('some error')
    res.send('Welcome!')
})

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

app.listen(PORT, () => {
    console.log(`Server worked on PORT: ${PORT}`);
})  