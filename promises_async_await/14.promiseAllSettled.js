const promise1  = new Promise((resolve)=>{
    setTimeout((()=>{
        resolve("Result 1")
    }),3000)
})
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Result2");
    },3000)
});
const promise3 = new Promise((resolve,reject)=>{
    setTimeout((()=>{
        reject("Result3")
    }),2000)
})
Promise.allSettled([promise1,promise2,promise3]).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})