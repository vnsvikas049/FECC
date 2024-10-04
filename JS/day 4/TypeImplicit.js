// Basic coersion 
function checkCoercion(a, b) {
    if (a === b) {
        console.log(`${a} and ${b} both are strict equality`)
    }
    else if (a == b) {
        console.log(`${a} and ${b} both are loose equality`)
    }
}
let a = "5";
let b = 5;

checkCoercion(a, b)


//  coersion in conditional

function coerceConditionalValue(value){
    if(value=="" || value==null || value==NaN || value==undefined || value==0 || value==false){
      return 'falsy';
    }
    else{
      return 'truthy';
    }
  }
  let value1 = coerceConditionalValue(24)
  console.log(value1)

