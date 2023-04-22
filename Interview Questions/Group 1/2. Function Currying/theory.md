# Function Currying

## There are 2 ways to achieve Function currying

- 1. By using `Closures`

```
let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTen = multiply(10);
multiplyByTen(5); // Output: 50

```