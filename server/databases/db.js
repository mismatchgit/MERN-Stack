import mongoose from "mongoose";



const connection= async(username,password) =>{
    const URL =`mongodb+srv://${username}:${password}@crud-db.v5gro3b.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Databse Connected succesfully')
    } catch(error){
        console.log("Error While Connecting with DATABASE",error)
    }

}

export default connection;