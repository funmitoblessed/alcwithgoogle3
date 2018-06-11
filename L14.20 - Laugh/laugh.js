/*
 * Lesson 14.20 Quiz: Laugh (5-4)
 * 
 * Directions:
 * Write an anonymous function expression that stores a function in a variable called "laugh"
 * and outputs the number of "ha"s that you pass in as an argument.
 * 
 * laugh(3);
 * 
 * Returns: hahaha!
 */

// SOLUTION

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) { //anonymous function
    var output = "";
    for (var i = 0; i < num; i++) {
        output += "ha";
    }
    return output + "!";
};
laugh(6);