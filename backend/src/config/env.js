import "dotenv/config"

//Here i am exporting an object 
export const ENV={
   
        PORT : process.env.PORT || 5001,
        MONGODB_URI: process.env.MONGODB_URI,
        NODE_ENV : process.env.NODE_ENV
  
}