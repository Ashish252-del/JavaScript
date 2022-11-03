// Array
let arr = [1, 2, 3, 4];
console.log(arr);
console.log(arr.length);
console.log(arr[3]);
arr[2] = 10;
console.log(arr);
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);
arr.push(500); console.log(arr);
arr.pop(); console.log(arr);
//map, in map we can perform operation for every element of array
arr.map((v) => console.log(v * 10));
// filter , here we use a condition in arrow fat function
const ages = [20, 12, 35, 45];
const result = ages.filter((v) => { return v != 12; })
console.log(result);