function OddEven(num){
    const promisedata = new Promise(function(resolve,reject){
        if(num%2==0){
            resolve("Number is Even");
        }
        else{
            reject("Number is Odd");
        }
    })
    promisedata.then((message)=>{
        console.log(message);
    }).catch((error)=>{
        console.log(error);
    })
}
OddEven(7);