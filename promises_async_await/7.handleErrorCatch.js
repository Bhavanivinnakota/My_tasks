var promiseobj = new Promise(function(resolve,reject){
    resolve("Data loaded")
});
promiseobj.then((message)=>{
    console.log("Success");
    console.log(message);
}).catch((error)=>{
    console.log(error);
    console.log("An Error Occured");
})