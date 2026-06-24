const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/userRoutes')
const proutes = require('./routes/projectRoutes')
const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Rrgi')
.then(()=>console.log("Databse connceted"))

app.use("/api",routes)
app.use("/api",proutes)

app.listen(8000,()=>{
    console.log("Server Started")
})