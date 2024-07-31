/*The Lemonade Stand:
Sarah wants to start a lemonade stand during the summer vacation to earn some extra money. 
She plans to sell each cup of lemonade for $1.50. 
Write a program that calculates how much money Sarah will earn if she sells a certain number of cups of lemonade. 
Prompt the user to input the number of cups sold, then output the total earnings.
*/

const input=require("readline-sync")
let n = input.questionInt("Enter the number of cups sold: ")

s = n * 1.50

console.log(s);
