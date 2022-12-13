import mongoose from "mongoose"

const connectDB = (url) => {
    return mongoose.connect(url)
        .then(() => console.log('success DB connect'))
        .catch((err) => console.log('DB error', err))
}

export default connectDB