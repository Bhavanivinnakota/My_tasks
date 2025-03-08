function rejection(){
var promisobj = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject("Rejected after 3 seconds")
    },3000)
})
return promisobj;
}
console.log(rejection())