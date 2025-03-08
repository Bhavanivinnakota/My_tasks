function stringEmpty(str){
    var promiseobj = new Promise(function(resolve,reject){
        if(str === '' || str===""){
            reject("String cannot be empty");
        }
        else{
            resolve(str);
        }
    });
    return promiseobj;
}

console.log(stringEmpty(""));