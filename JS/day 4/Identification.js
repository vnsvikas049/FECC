// identify typeof
function identifyType(value){
    let type = typeof value;
    console.log(type)
    return type;
  }
  console.log(identifyType(6))

//   is Array
function isArrayOrObject(value) {
    console.log(` ${Array.isArray(value)}`)
    console.log(` type ${typeof(value)}`)
}
let Obj = {};
isArrayOrObject(Obj);