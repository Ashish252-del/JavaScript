console.log("a");
let a = 10;
setTimeout(()=>{
    console.log("b");
    
}, 1000);
console.log(a+10);

// 2 ways 1-->
// promise 
let p = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        console.log("abhs");
        resolve(10000)
        },1000)
})
// p.then((data)=>{
//  console.log(data);
//  console.log(a);
//  console.log("c")

// })


async function solve () {
    await p;
    console.log("hjkk");
}
solve();
console.log("adi");
