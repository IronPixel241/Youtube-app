import dotenv from "dotenv";
// require('dotenv').config()

import connectDB from "./db/index.js";

dotenv.config();


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB Connection Failed !!! , ${err}`);
});









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