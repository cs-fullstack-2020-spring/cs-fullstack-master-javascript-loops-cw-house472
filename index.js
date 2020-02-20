// # JavaScript Loops Classwork

// ## For Loops

// ### Exercise 1:
// - Use a for loop to print numbers -3 through 8
// for(let i=-3; i<=8; i++){
//     console.log(i)

// }

// ### Exercise 2:
// - Use a for loop to count from -5 to 5 three times in a row

// for(let i=-5; i<=5; i++){
//     console.log(i)
// }

// ### Exercise 3:
// - Use a for loop to print only even numbers from -50 to 50

// for(let i=-50; i<=50;i=i+2){
    
//     console.log(i)
    
// }


// ### Exercise 4:
// Start with the following array:
// `let high_scores = [2112, 1024, 9000, 9001, 7200, 2600, 10000]`

let scores=[2112, 1024, 9000, 9001, 7200, 2600, 10000]
// - Use a for loop to print each score
for(i=0; i<=scores.length; i++){
    console.log(scores[i])
    if (scores > 9000){
        console.log(score + 'Over 9000!')
}


// - If the score is greater than 9000 print the score and the text `OVER 9000!`
// Expected Output:
// ```
// HIGH SCORES

// 2112
// 1024
// 9000
// 9001 OVER 9000!
// 7200
// 2600
// 10000 OVER 9000!
// ```

// ### Exercise 5:
// - Prompt the user to enter a number 
// - Prompt the user to enter another number 
// - Create a for loop that counts from the first number to the second number they entered


// ## While/Do While Loops

// ### Exercise A:
// - Print -10 through 5 using a counter and while loop.

// let i= -10
// while(i<=5){
// console.log(i)
// i=i+1
// }

// ### Exercise B:
// - Write a While loop that counts backwards from 10 to 0

// let i=10
// while(i>=0){
//     console.log(i)
//     i=i-1
// }

// // - Log the current count at the end of each iteration EXCEPT if the current count is ```5```

// if(i==5){
//     console.log('five') 
// }


// ### Exercise C:
// - Create an empty `name_array`
// let name_array=['']
// // - Ask the user ```Enter a word.
// let userInput=prompt("Enter a word")
// let q=prompt("ENTER Q TO QUIT")
// //  Enter 'q' to quit.``` Add each word they enter to the array
// let userWord={userInput}
// // // - Create a while loop that will keep asking for words to add to the array until they enter 'q'
// while(name_array!=q)
// console.log(userInput)
// {

// }
// // - When the user enters 'q' use a **for** loop to print each word from the array


