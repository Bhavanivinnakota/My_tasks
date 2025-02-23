function f1(fn){
    console.log("1");
    console.log("2");
    console.log("3");
    //f2();
    fn();

}
function f2() {
    console.log("a");
    console.log("b");
    console.log("c");
}
function f3(){
    console.log("4");
    console.log("5");
    console.log("6");
}
f1(f2);
f3();