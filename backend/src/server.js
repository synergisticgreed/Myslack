import express from "express"
import {ENV} from "./config/env.js"
import connectDB from "./config/db.js"
const app=express()



app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(ENV.PORT,()=>{
    console.log(`Server is running on PORT : ${ENV.PORT}`)
    connectDB()
})