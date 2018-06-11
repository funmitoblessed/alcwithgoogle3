/*
 * Lesson 14-16 Quiz: Build a Triangle (5-3)
 * 
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(num) {
    var trn = "";
    for (var i = 1; i <= num; i++) {
        trn = trn + makeLine(i);
    }
    return trn;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));