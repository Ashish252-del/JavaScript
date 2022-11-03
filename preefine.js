// function are of two type
//1. user define - defined by user
// 2. predefined - already defined in complier

// setInterval function - it takes two arguments 1. a function that we have to run, 2. time for which we have
// to call the function
setInterval(() => { console.log("warning") }, 5000);

// setTimeout - it takes two arguments 1. a function that we have to run, 2. time after which we have to call at once
setTimeout(() => { console.log("time out") }, 5000);
