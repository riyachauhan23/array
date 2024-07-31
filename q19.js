/*The Exam Scores:
A teacher wants to calculate the average score of her students on a recent exam. Write a program that prompts the teacher to input the scores of each student, then calculates and outputs the average score. The program should also determine and output the highest and lowest scores.
*/

const input=require("readline-sync")

// // for (var i = 0; i < 3; i++) {
// //     for (var j = 0; j < 2; j++) {
// //         console.log(i + "," + j);
// //     }
// // }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 2; j++) {
//       console.log(i * j);
//     }
//   }
  
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number of days: ', (n) => {
  rl.question('Enter the temperatures separated by space: ', (temps) => {
    const temperatures = temps.split(' ').map(Number);
    let highest = temperatures[0];
    let lowest = temperatures[0];

    for (let i = 1; i < n; i++) {
      if (temperatures[i] > highest) {
        highest = temperatures[i];
      }
      if (temperatures[i] < lowest) {
        lowest = temperatures[i];
      }
    }

    console.log(`${highest} ${lowest}`);
    rl.close();
  });
});
