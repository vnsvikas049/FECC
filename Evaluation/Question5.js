function mergeObjects(obj1,obj2){
    return {...obj1,...obj1}
  }
  const obj1 = { name: "John", age: 30 };
  
  const obj2 = { ...obj1,age: 40, city: "New York" };
  
  const result = mergeObjects( obj2);
  console.log(result);