const http = require("http");
const fs = require("fs");
let portnum = 7619;
const server = http.createServer((req,res)=>{
      console.log("Request received!");
      if(req.url==="/home"){
        fs.readFile("Home.html","utf-8",(error,data)=>{
            if(error){
                res.end("Failed to send the data from server");
            }
            else{
                res.end(data);
            }

        })
      }
      else if(req.url==="/info"){
        fs.readFile("info.json","utf-8",(error,data)=>{
            if(error){
                res.end("Failed to load the data....");
            }
            else{
                res.end(data);
            }
        })
      }
      else{
        fs.readFile("login.html","utf-8",(error,data)=>{
            if(error){
                res.end("Failed to load the data....");
            }
            else{
                res.end(data);
            }
        })
      }
    
});

server.listen(portnum,()=>{
    console.log("Request Received to server")
})
