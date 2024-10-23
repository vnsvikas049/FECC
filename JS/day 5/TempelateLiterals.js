// basic string interpolation 
function greet(name,age) {
    return `Hello, my name is ${name} and I am ${age} years old.`
}
console.log(greet('vikas',27));

// Multi line string 
function generateParagraph() {
    return `<p>this is Paragraph created by template literals</p>`;
}
console.log(generateParagraph());


// Expression Inside Template Literals:-----------------------------------
function calculateSum(a,b) {
    return `the sum of ${a} and ${b} is ${a+b}`;
}
console.log(calculateSum(3,9));


// Embedding a function in template literals-----------------------------
function formatCurrency(value) {
    return `$${value}`;
}
let currency=formatCurrency(50);
console.log(currency);

// Nested Template Literals:--------------------------------------
function formatMessage(name,status) {
    if (status===true) {
        return `Welcome back ${name}! Your status is : active.`

    }
}
console.log(formatMessage("vikas",true));

