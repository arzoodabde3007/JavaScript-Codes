// Const => If a variable is declared as const then it can oonly be initialized once throughout the code and its value doesnot update.

const name = "Alex";
console.log(name);

// name = "John"; // This give an error assignment to constant variable is invalid
// console.log(name);


//let and var => both let and var are used to store the data within the element.

//let => let is a blocked scoped element it means it only be accessible within its block.

//var => var is a functional scoped element and it can be accessible throughtout the program.

if(true){
    let a = 10;
    var b = 20;
}

// console.log(a); // this will give an error "a is undefined"
console.log(b); // output 20

var num = 20;
var num = 30;

console.log(num);

//Re-declaration is possible in var.

let age = 30;
// let age = 10; // give an error 'age' has already been declared

//re-declaration is not possible in let.
