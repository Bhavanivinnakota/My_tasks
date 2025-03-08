function sum(a,b){
var promiseobj = new Promise(function(resolve,reject){
        if(typeof a === 'number' && typeof b  === 'number')
       {
        resolve(a+b)
       }
      else{
        reject("Both inputs are not a numbers")
      }
})
return promiseobj;
}
console.log(sum(67,33));