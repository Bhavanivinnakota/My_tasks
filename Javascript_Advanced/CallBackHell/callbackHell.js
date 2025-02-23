function f1(){
   return "I am F1";
}
function f2(f1output) {
    return "I am F2" + f1output;
}
function f3(f2output){
    return "I am F3" + f2output;
}

function f4(f3output){
     return "I am F4" + f3output;
}

console.log(f4(f3(f2(f1()))));