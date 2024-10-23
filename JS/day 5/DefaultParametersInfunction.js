// Basic default parameters-----------------------
function greet(name = "Guest") {
    return `\"Hello, ${name}!\"`
}
console.log(greet())


// Multiple default parameters---------------------------------
function calculateTotal(price, tax = 0.05) {
    let withOuttax = price;
    let value = price * tax / 100
    let withtax = price - value;
    return `withOuttax ${withOuttax} withtax ${withtax}`;
}
console.log(calculateTotal(20000));


// Default Parameters with Undefined Values----------------------------;
function describePerson(name, age = 25) {
    if (age === undefined) {
        return age;
    }
    return { name, age }
}
console.log(describePerson('vikas'));


// Default Parameters in Complex Expression:-------------------------
function calculateDiscount(price, discount = price * 0.1) {
    let withDiscount =  discount/price * 100;
    let applyDiscount = price - withDiscount;
    return applyDiscount;
}
console.log(calculateDiscount(1000));

// Overriding Default Parameters:-----------------------------;

function createUser(username,role="user"){
    return {username,role};
}
let overriding= createUser('vikas',)
console.log(overriding);