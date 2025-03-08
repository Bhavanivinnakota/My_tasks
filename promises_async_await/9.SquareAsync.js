async function handling(){
    try{
        const promiseobj = await new Promise((_,reject)=>{
            reject("Data not fetched Properly")
        })
        
    }
    catch(error){
        console.log("Error caught in try/catch",error)
    }
}
handling();