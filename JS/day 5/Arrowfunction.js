// basic arrow function 


let add = (a,b) => a+b; {
    console.log(add(2,4))
  }

//   single line arrow function 


let singleline = (n) => n*2 ; {
    console.log(singleline(5))
  }

//   Arrow function with impicitly 


let greet = (name) => `Hello ${name}`;{
    console.log(greet('vikas'))
}
//  arrow function in callback 


let filterEvenNumbers=()=>{
    let array=[1,2,3,4,5,6,7,8,9,10]
    let evenNumber= array.filter(num =>num%2==0);
   
    console.log(evenNumber)
 }
 filterEvenNumbers();

//  Arrow function with this context 

let Person={
    name:"vikas",
    person:function (name) {
       console.log(this.name);
    }
 
 }
 Person.person();
