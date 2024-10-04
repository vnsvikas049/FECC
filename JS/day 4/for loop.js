// Basic loop 
for (let i=1 ; i<=10 ; i++){
    console.log(i)
}

// array loop

function arrayElements(arr){
    for(let i=0 ; i<arr.length ; i++){
        console.log(arr[i]);
    }
}
arrayElements([1,2,3,4,5])

// nested loop

function createMultiplicationTable(n) {
    for (let i = 0; i < n; i++) {
        let bag="";
       for (let j = 0; j < n; j++) {
        // console.log()
        bag+=j+" "
        
       }
        console.log(bag)
    }
}
createMultiplicationTable(5)