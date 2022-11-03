// function declaration
function Abhay() {
    console.log("My debt is", 450);
}
function Shivam() {
    return 45;
}
function Shivang() {
    //let a = Shivam();
    console.log("My debt is", (Shivam() + 45));
}
// function calling
console.log("Ashish is Asking for debt");
console.log("Shivam has to give", Shivam());
console.log("Abhay and Shivang says that");
Abhay();
Shivang();
