function promisestate(){
    const promisedata = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Resolved......")
        },6000);
    })
        const interval = setInterval(()=>{
            console.log("Pending...................");
        },1000);
        promisedata.then((message)=>{
            clearInterval(interval);
            console.log(message);
        })
    
}
promisestate();