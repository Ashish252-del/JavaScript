// trycatch block is use to handle the error
// in try block our error occur and catch bock will catch it
const test1 = () => {
    try {
        consol.log("sdkjfklsdjf");
    }
    catch(err) {
        console.log(err.message);
    }
}
test1();
let test2 = () => {
    try {
        let a = 5 / 0;
        console.log(a);
    }
    catch (e) {
        console.log(e.message);
    }
}
test2();