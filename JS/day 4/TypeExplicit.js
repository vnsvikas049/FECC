// convert to Number
function convertToNumber(value){
    return Number(value);
}
console.log(convertToNumber('10'));
console.log(convertToNumber('20.5'));
console.log(convertToNumber('false'));


// convert to String
function convertToString(value){
    return String(value);
}
console.log(convertToString('true'));
console.log(convertToString({}));
console.log(convertToString([]));
console.log(convertToString(20));

// Convert and compare
function convertAndCompare(a, b){
    let A = Number (a)
    let B = Number (b);
    
    
    if(A === B){
    return `both value is equal after conversion ${A}`;
    }
    else{
      return `Value after conversion ${A} and ${B}`
    }
    
    }
    console.log(convertAndCompare(10 , '10'));