
let name = {
    firstName: 'Utkarsh',
    lastName: 'Pant',
   
};
let player = {
    firstName: 'Roger',
    lastName: 'Federer',
   
};

let printFullName= function(city, country){
    console.log(this.firstName+" "+this.lastName+" from "+city+", "+country);
}

// Function Borrowing. 
printFullName.call(player, 'Basel', 'Switzerland');
// Only difference between call() and apply() is the way we pass function arguements.
// In case of apply(), we pass arguments as array list.
printFullName.apply(name, ['Rewa', 'India']); 
// printFullName.call(player);


// Bind Method: Instead of calling the function on the object, it returns a copy of that function
// which can be invoked later.

let printName =  printFullName.bind(player, 'Basel', 'Switzerland');
printName();

