import mongoose from "mongoose";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("error occured", err);
  });
// (async()=>{
//    try{
//       mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       application.on("error",(error)=>{
//         console.error("Error :",error);
//          throw error

//       })
//      app.listen(process.env.PORT,()=>{
//         console.log(`server running on port ${process.env.PORT}`);
//      })
//    }
//    catch(error){
//     console.error("Error :",error);
//     throw error

//    }
// })()
