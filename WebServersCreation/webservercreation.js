const http = require("http");
const fs = require("fs");
let portnumber = 4002;
const server = http.createServer((req,res)=>{
    console.log(req.url);
        console.log("Request is received!")
        fs.readFile('info.json','utf-8',(error,data)=>{
            if(error){
                res.end("Cant Read the file...")
            }
            else{
                res.end(data)
            }
        });
})

server.listen(portnumber,()=>{
    console.log("Server started");
});