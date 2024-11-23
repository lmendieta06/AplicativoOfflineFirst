import mongoose from "mongoose";

export const connectionMongo = async () =>{

    try{

        // connect data base
        await mongoose.connect(process.env.MONGO_URI,{});

        console.log(`succesful connection to data base`);
    }catch(error){
        console.error("Error de conexion : ", error.message);
    }

}