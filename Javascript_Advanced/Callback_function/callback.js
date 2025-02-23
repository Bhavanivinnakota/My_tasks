function f1(x){
    console.log("f1 is called");
    x();
}

function f2(){
    console.log("f2 is called");
}
function f3(){
    console.log("f3 is called");
}

f1(f3);