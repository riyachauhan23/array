/*The Garden Planner:
Sarah has a rectangular garden divided into smaller square sections. Each section can either be filled with flowers or left empty. Given an array representing the garden layout, where 1 represents a flower-filled section and 0 represents an empty section, write a program to count the total number of flowers in the garden.
*/

const input=require("readline-sync")

// const gardenLayout = [
//     [1, 0, 1],
//     [0, 1, 0],
//     [1, 1, 1]
// ];


// let totalFlowers = 0;

// for (let row = 0; row < gardenLayout.length; row++) {
//     for (let col = 0; col < gardenLayout[row].length; col++) {
//         if (gardenLayout[row][col] === 1) {
//             totalFlowers++;
//         }
//     }
// }

// console.log( totalFlowers);


// Assuming the input is taken from standard input
let input = "1 5"; // Example input
let lines = input.trim().split("\n");
let testCases = lines.map(line => line.split(" ").map(Number));

// Loop through each test case
for (let i = 0; i < testCases.length; i++) {
    let [N, X] = testCases[i];
    let slicesNeeded = N * X; // Total slices needed for all friends
    let pizzasNeeded = Math.ceil(slicesNeeded / 4); // Minimum pizzas needed
    console.log(pizzasNeeded);
}
