



const input=require("readline-sync")

// const compartments = [0, 1, 1, 0, 0, 1, 1, 1, 0, 1]; // Example array representing the number of books in each compartment

// let maxConsecutive = 0;
// let currentConsecutive = 0;

// for (let i = 0; i < compartments.length; i++) {
//     if (compartments[i] === 1) {
//         currentConsecutive++;
//         maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
//     } else {
//         currentConsecutive = 0;
//     }
// }

// console.log( maxConsecutive);

let N = 10; // Input value
let primeCount = 0; // Counter for prime numbers

// Loop through numbers from 2 to N
for (let i = 2; i <= N; i++) {
    let isPrime = true;

    // Check if current number is divisible by any number from 2 to its square root
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i !== j && i % j === 0) {
            isPrime = false;
            break;
        }
    }

    // If current number is prime, increment the counter
    if (isPrime) {
        primeCount++;
    }
}

console.log(primeCount); // Output the count of prime numbers
