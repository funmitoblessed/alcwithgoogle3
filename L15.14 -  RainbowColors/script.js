/*
* Lesson 15-14 Quiz: Colors of the Rainbow
*
* Directions:
* James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:

* var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
* but James had this:

* var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
* Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

* Remove "Blackberry"
* Add "Yellow" and "Green"
* Add "Purple"
*/
/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here

rainbow.splice(-2, 1);

rainbow.splice(-1, 0, 'Yellow', 'Green');

rainbow.splice(-1, 1, 'Blue', 'Purple');

console.log(rainbow);