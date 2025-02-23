function fone(y){
    console.log("Fi is displayed...");
    y()
}
function ftwo(){
    console.log("F2 is displayed...");
}

fone(ftwo,function (){console.log("Named Function")},(x)=>{console.log("X is called")});