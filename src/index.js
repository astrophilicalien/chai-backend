import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 3000, () =>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(`MONGODB connection failed !!!`, err)
})












/*
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening successfully on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error);
        throw err
    }
})()
    
*/