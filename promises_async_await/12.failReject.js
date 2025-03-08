function retryPromise(attempt){
    return new Promise((resolve,reject)=>{
        let count =0;
        function attempts(){
            count++;
            console.log(`Attempts : ${count}`)
            let success = true;
            if(success){
                resolve("Successs.............................")
            }
            else if(count<attempt){
             setTimeout(attempts,1000);
            }
            else{
                reject("Rejected afetr three attempts")
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