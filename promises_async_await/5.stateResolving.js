var promise = new Promise(function(resolve,reject){
    console.log("Pending......")
    setTimeout(()=>{
        resolve(
            console.log("Resolved")
        )
    },3000)
})