const fs = require("fs");

// Synchronous way to function calling => next code run only when the function call is completed
const timetakingfunction = () => {
    const readedfile = fs.readFileSync("read.txt", "utf-8");
    console.log(readedfile);
};
timetakingfunction();
console.log("Hello after sync function\n");
// asynchronous way to function calling => this function returns promise that it will execute but need to wait
// till the next code can be run
// write async before the fat arrow
const asyncfunction = async () => {
    const readedfile = await fs.readFileSync("read.txt", "utf-8");
    console.log(readedfile);
};
asyncfunction();
console.log("Hello after asycn function"); 