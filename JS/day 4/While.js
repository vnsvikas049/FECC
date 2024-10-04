let i = 0;
while (i <= 5) {
    // console.log(i);
    i++;
}

// while loop with condition 

function countDowmFrom(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}
countDowmFrom(6)

// while loop break condition

function findFirstEven(numbers) {
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 == 0) {
            console.log(numbers[i])
            break;
        }
               i++;
    }
}
findFirstEven([2,5,8,6,9])
