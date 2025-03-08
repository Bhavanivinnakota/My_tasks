async function squaredNumber(num){
    try{
        const promiseObj = await new Promise((resolve)=>{
            resolve(num*num);
        })
        console.log(promiseObj)
    }
    catch(error){
        console.log("Date not fetched correctly",error)
    }
}
squaredNumber(4);