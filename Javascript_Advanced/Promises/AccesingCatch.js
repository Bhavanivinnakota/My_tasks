var Promiseobject = new Promise(function(resolve,reject){
    reject({error: "something went wrong"})
 });
 Promiseobject.then((res)=>console.log(res)).catch((error)=>console.log(error))