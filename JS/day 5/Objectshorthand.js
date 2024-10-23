// basic object shorthand 
let createPerson = (name, age) => {
    let obj = {
        name,
        age
    }
    return obj;
}
console.log(createPerson("vikas", 27))

// method shorthand 
let createPersonModify = (name, age) => {
    let obj = {
        name,
        age,
        introduce:function () {
            return `Hi, I'm ${name} and I'm ${age} years old.`
        }
    }
    
    return obj.introduce();
}
console.log(createPersonModify("vikas", 27))

// computed property name 
function createObject(key,value) {
    let obj={
        [key]:value,
    }
    return obj;

}
console.log(createObject('name','vikas'))

// object destructuring with shorthand 
function mergeObjects(obj1,obj2) {
    let {firstName,lastName,age}=obj1;
    let {hobby,Aim}=obj2;
    return {firstName,lastName,age,hobby,Aim};

}
let obj1={
    firstName:"vikas",
    lastName:"Mishra",
    age:27
}
let obj2={
   hobby:"Playing mobile games",
   Aim:"Become a software developer"
    
}

console.log(mergeObjects(obj1,obj2));

// Advanced shorthand usage 
function updatedPerson(oldPerson,newName) {
    let obj1={
     oldPerson,
     age:35,
     city:"Varanasi"
    }
    let obj2={
     newName,
     age:25,
     city:"Prayagraj"
    }
    return {obj1,obj2};
 }
 
 let OldName1=updatedPerson('vikas','shubham');
 let NewName2=updatedPerson('Aman','Abhishek');
 console.log(OldName1,NewName2)
