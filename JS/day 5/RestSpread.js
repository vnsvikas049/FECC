// rest parameter 

function sum(...numbers) {
    
    let add=0;
    for (const number of numbers) {
        add+=number;
    }
    console.log(add)
}
sum(1,2,3,8)

// Spread Array 

function mergeArrays(arr1,arr2) {
    return [...arr1,...arr2]
  }
  let array1=[1,2,3,4,5]
  let array2=[6,7,8,9]
 let merged = mergeArrays(array1,array2);
 console.log(merged)
 
// objects spread 

 function updatePerson(person,updates) {
    return {...person,...updates};
     
 }
 let person={
     name:"vikas",
     age:"28"
 }
 let updates={
     name1:"shubham",
     hobby:"playing cricket"
 
 }
 let mergeds= updatePerson(person,updates);
 console.log(mergeds)

//  rest with destructuring 
function extraFirstAndRest(arr) {
   
    let [name,age,...rest]= arr
    console.log(name,age,rest);
}
extraFirstAndRest(["vikas",27,'Vishwajeet','Abhishek'])

// Spread in function 

function calculateTotal([...args]) {
   
    let sum=0;
    for (const no of args) {
      
        sum+=no;
    }
    console.log(sum);
}
calculateTotal([1,2,3,4,5,6,7])