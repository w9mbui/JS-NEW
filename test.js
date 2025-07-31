greetings(); //Function Declarations
function greetings() {
console.log("Hello!");
}

const multiply = function (a, b) //Function Expressions hoisted
{return a * b};
console.log(multiply(5, 4))

console.log(Variable); //var declarations

var Variable = "greetings";
console.log(Variable); 

const greetings = function() { //not hoisted fex
    console.log("Hello!");
};
