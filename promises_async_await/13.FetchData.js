async function fetchData(){
    try{
    const promisedata = await new Promise((resolve)=>{
        resolve(
            setTimeout(()=>{
                console.log("Data Fetched!.............")
            },3000)
        )
    })
   
}
catch(error){
    console.log("Error while Fetching data",error)
}
}
fetchData();