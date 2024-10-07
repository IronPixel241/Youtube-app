import dotenv from "dotenv";
// require('dotenv').config()

import connectDB from "./db/index.js";

dotenv.config();


connectDB();









// Method - 1 (Works perfectly fine , but use method - 2)

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error" , (error) => {
//             console.log("ERR : " , error);
//             throw error;
//         })

//         app.listen(process.env.PORT , () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } 
//     catch (error) {
//         console.error("Error: ", error)
//         throw error
//     }
// })()