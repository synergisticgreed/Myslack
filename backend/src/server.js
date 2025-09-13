import express from "express"
import {ENV} from "./config/env.js"
import connectDB from "./config/db.js"
import {clerkMiddleware} from "@clerk/express"


const app=express()

app.use(clerkMiddleware())  //req.auth will be available to chack if user is authenticated or not

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(ENV.PORT,()=>{
    console.log(`Server is running on PORT : ${ENV.PORT}`)
    connectDB()
})