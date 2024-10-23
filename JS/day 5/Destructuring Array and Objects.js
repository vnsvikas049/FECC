// Array destructuring 
function swap(a, b) {
    let [name,age]=a;
    let [address,city]=b;
    // console.log(`name:- ${name} age:- ${age}  address:- ${address} city:- ${city}`)
}
let A = ["vikas", 27]
let B = ["Maheshpur","Varanasi"]
swap(A,B);

// Object destructuring 
function displayPerson(person){
    let {name,age}= person;
     // console.log(name,age)
   }
   let person1 = {
     name : 'vikas',
     age : 27
   }
   displayPerson(person1)

//    Nested destructuring 
function extractNestedData(obj){
 
  let {name:{first,last},age}= obj
       // console.log(first,last);
  // console.log(obj)
}
  let obj1 = {
    name:{
      first:'John',
      last:'doe'
    },
    age:22
    
  }
  extractNestedData(obj1)

// default value destructuring 
  function getCoordinates({x=0,y=0}={}) {
    if (x==null &&y==null) {
        return {x,y};
    }
    return (`x value is ${x} y value is ${y}`);

}

let x=1;
let y=7;
let value= getCoordinates({x,y});
console.log(value);

// Rest in destructuring 
function getUserInfo(user){
  let {name,...rest} = user
  console.log(name,rest)
}
 
let user1 = {
  name:'vikas',
  age: 27,
  hobby:'playing cricket'

}
getUserInfo(user1)
