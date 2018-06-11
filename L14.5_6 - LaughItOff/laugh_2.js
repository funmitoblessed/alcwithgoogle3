/*
 * Lesson 14-6 Quiz: Laugh it Off 2 (5-2)
 * Directions:
 * Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.
 * 
 * TIP: You might need a loop to solve this!
 * 
 * Here's an example of the output and how to call the function that you will write:
 * 
 * console.log(laugh(3));
 * Prints: "hahaha!"
 * 
 */


// SOLUTION
/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num) {
    var output = '';
    for (var i = 1; i <= num; i++) {
        output += 'ha'
    }
    output += '!'
    return output;
}
console.log(laugh(5));