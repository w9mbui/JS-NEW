function largest(arr) {
    return arr.reduce((largest, current) =>
        (current > largest ? current : largest), arr[0]);
}

let num1 = [10, 15, 38, 70, 13];
console.log(largest(num1));


const multiply = function (a, b) 
{return a * b};

console.log(multiply(5, 4))
greetings(); //Function Declarations

function greetings() {
  console.log("Hello!");
}

function factorial(n) {
    let result = 1;
    for (let i =1; i<=n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

for(let i=10; i<=20; i++){
    console.log(i)
}

let count=1
let i,j
for(j=2; j<=100; j++){
    for(i=1;i<=j; i++ ){
        if(j % i ==0)
            count++
    }
    if(count==2)
        console.log(j)
    count=0
}