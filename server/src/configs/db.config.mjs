import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(() => console.log ('Connected Successfully'))
    .catch(() => console.log (err))