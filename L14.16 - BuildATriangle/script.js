/*
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

function buildTriangle(length) {
    for (var i = 1; i <= length; i++) {
        console.log(makeLine(i));
    }
}
buildTriangle(10);

// test your code by uncommenting the following line
// console.log(buildTriangle(10));


// find a way to automate
/*
function buildTriangle(length) {
	triangle = makeLine(length-9) + makeLine(length-8) + makeLine(length-7) + makeLine(length-6) + makeLine(length-5) + makeLine(length-4) + makeLine(length-3) + makeLine(length-2) + makeLine(length-1) + makeLine(length);
    //return triangle;
    console.log(triangle);
}	
buildTriangle(10)
*/