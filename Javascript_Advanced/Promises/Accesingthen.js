var Promiseobject = new Promise(function(resolve,reject){
    resolve({name:"Bhaskar",age:25})
 });
 Promiseobject.then((res)=>console.log(res)).catch((error)=>console.log(error))