const express = require("express");
const con = require("./config")
const app = express();

app.get("/",(req, resp)=>{
    con.query("select * from userregistation",(e,result)=>{
        
        if(e){
            resp.send("Error:")
        }
        else{
            resp.send(result)
        }
    })
})

app.listen(5000)

// con.query("select * from userregistation",(err,result)=>{
//     console.log(`Result : ${result}`);
//     console.log("Result : ",result);
// })