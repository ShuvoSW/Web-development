// Big O(1) // Constaint

function bigOOne(arr) {
    return arr[2]
}

console.log(bigOOne(["A", "B", "C"]));

// Big O(n) // Linear

function bigON(arr) {
    for(let i of arr){
        console.log(i);
    }
}

bigON(["A", "B", "C"])

// Big O(n^2)

function bigONSquare(arr) {
    for(let i=0; i<arr.length; i++){      // arr.length = n
        for(let j=0; j<arr.length; j++){  // arr.length = n
            console.log(arr[i], arr[j]);
        }
    }
}

bigONSquare(["A", "B", "C"])

// Big O(Logn)

function targetNumber(n) {
    while(n>1) {
      console.log("-",n);
        n =Math.floor(n/2)  
        console.log(n);
    }
}

targetNumber(16)