// Function Currying using Closures
let multiply = function(x){

    return function(y){
        console.log(x*y);
    }
}

// Function Currying using bind() Method

const add = function(x,y){
    console.log(x+y);
}

const addByTen = add.bind(this, 10);
addByTen(5);



let multiplyByTwo = multiply(2);
multiplyByTwo(6);