// var vs let block scope........
function testLet() {
    // let name = 'vikas';
    if(true){
      let name = 'vikas';
      console.log(name)
    }
  // console.log(name);
  }
  
  testLet()
  
  function testVar(){
    // var x = 2;
   if(true){
     var x=2;
    //  console.log(x)
   }
    console.log(x)
  }
  
  testVar()

// Constant variables ......
  function createConstArray(){
    const arr = [1,2,3,4,5];
   arr.push(11,12,13);
   // console.log(arr)
   // arr = [6,7,8,9]; i reassign a value to the array
   console.log(arr)
 }
 createConstArray()

// temporal dead zone 
function demonstrateTDZ(){
  // console.log(letTest);
  // console.log(vartest);
  
  let letTest = 'vikas';
  var vartest = 'mishra';
}
demonstrateTDZ()

// test redeclration 
function testRedeclaration() {
  var define="Variables declared with var can be redeclared within the same scope without any issues.";
  let letdefine="let can not be re-declared ";
  const constdefine="const also can not be re-declared";
  console.log(define);
  console.log(letdefine);
  console.log(constdefine);
}
testRedeclaration();

// block scope and loop 
function loopWithVarAndLet() {
  // when used a let i cannot access i after the loop and found undefiend;
  for (let i = 1; i <= 5; i++) {
      console.log(" number is " +i);
      
  }
  console.log("End loop i is "+i);

  // when used var in the loop we can access i value after the loop scope and i value is increase;

  for (var i = 1; i <= 5; i++) {
      console.log(" number is " +i);
  }
  console.log(" End loop i is "+i)
}
loopWithVarAndLet()
