const express = require('express');
const serverConfig = require('./configs/server.config');
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const userModel = require('./models/user.model');
const app = express();

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection ;


db.on("error", ()=>{
    console.log("Error while connecting to DB");
});
db.once("open", ()=>{
    console.log("DB is connected");
    init();
})




app.listen(serverConfig.PORT, ()=>{
    console.log(`server started on the port number ${serverConfig.PORT}`);
})

async function init(){

    let admin = await userModel.findOne({
        userId : "admin"
    })

    if(admin){
        console.log("Admin user already present");
        return;
    }
    
        admin = await userModel.create( {
        name : "Manjari",
        userId : "admin",
        email : "14manjari@gmail.com",
        userType : "ADMIN",
        password : "Welcome1"

    });
    console.log(admin);

}










// async function  init(){
    
//     /**
//      * Check if the admin user is already present
//      */
//     let admin = await userModel.findOne({
//         userId : "admin"
//     })
//     if(admin){
//         console.log("Admin user already present");
//         return;
//     }
