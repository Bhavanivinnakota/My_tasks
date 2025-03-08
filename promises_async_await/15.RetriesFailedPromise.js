function retryPromise(attempt){
    return new Promise((resolve,reject)=>{
        let count = 0;
        function attempts(){
            count++;
            console.log(`Attempts : ${count}`);
            let success = false;
            if(success){
                resolve("Success");
            }
            else if(count < attempt){
                setTimeout(attempts,1000)
            }
            else{
                reject("Rejected data after 3 retries");
            }
        }
        attempts();
    })
}
retryPromise(2).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})