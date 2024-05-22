const mySql = require("mysql")

const con = mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'isofttest'
})

con.connect((err)=>{
    if(err){
        console.log("error is connection");
    }
})

module.exports = con;