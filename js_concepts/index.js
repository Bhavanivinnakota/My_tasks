let count=0;

const getData=()=>{
    //calls and API nd gets Data.
    console.log("fetching data...",count++)
}

//whenever the difference of time between two key presses is greater than the given time
//then only call api getData() should  fetch results from api.

const dosomething = function(fn,d){
        return function(){
            let context = this,
            args=arguments;
           let timer =  setTimeout(()=>{
                getData.apply(context,arguments)
            },3000);

        }
}
const btffunc = dosomething(getData,300);