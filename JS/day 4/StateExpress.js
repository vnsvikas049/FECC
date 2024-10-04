// statement and expression in JS
for (let i = 0; i < 5; i++) {


    // console.log(2+2); statement 
    
}

// Expression in function
function expressionInFunction(a,b) {
    if (a>b) {
        return a-b;
    }
    
    
    else{
        return a+b;
    }
}
let Express=expressionInFunction(10,4);
console.log(Express);



// Complex expression 

function complexExpression(a, b, c) {
    // Evaluate expressions
    const sum = a + b;             
    const product = c * b;         
         

    
    if (sum > product) {
        return `The sum (a + b = ${sum}) is greater than the product (c * b = ${product}).`;
    } else if (sum < product) {
        return `The sum (a + b = ${sum}) is less than the product (c * b = ${product}).`;
    } else {
        return `The sum (a + b = ${sum}) is equal to the product (c * b = ${product}).`;
    }
}
console.log(complexExpression(3,5,7))








