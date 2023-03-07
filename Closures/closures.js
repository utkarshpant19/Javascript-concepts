

function x(){

    var a = 10;
    function y(){
        console.log(a);
    }
    a = 90;
    return y;
}
var z = x(); // When x is called , it returns function y (whole body)

// 1000 lines of code
z(); // Since z stores function y, y is called along with it's lexical scope