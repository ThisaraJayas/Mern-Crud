const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8081

const URL = process.env.MONGODB_URL
mongoose.connect(URL,{})
const connection = mongoose.connection
connection.once("open",()=>{
    console.log('connection success!');
})

const userRouter = require('./routes/users.js')
app.use("/", userRouter)

app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`);
})