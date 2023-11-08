import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './route/userRoute.js';
import prodRoute from './route/prodRoute.js';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT
const MongoUrl = process.env.MONGO_URL

mongoose.connect(MongoUrl)
.then(()=>{
    console.log('Db connected successfully');
    app.listen(PORT, ()=> {
        console.log('Server is running on port 5000');
    })
})
.catch(error => {
    console.log('error');
})

app.use('/api/user',route)
app.use('/api/prod',prodRoute)