/*
 * Lesson 19.11 Quiz: Build a DOM (Family) Tree!
 * For this quiz, you'll need to add to the DOM tree that already exists.
 * '#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
 * of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
 */
// Your code goes here!
var familyOne, familyTwo, familyTwoChild, familyTwoGrandChild;
// select the div with the 'family1' id and assign to variable
familyOne = $('#family1');
// build a div that is a sibling of the 'family1' div
familyTwo = $('<div id = "family2"><h1>Family2<h1></div>').insertAfter(familyOne);
// build a child for the newly created 'div#family2'
familyTwoChild = $('#family2').append('<div id = "bruce"><h2>Bruce</h2></div>');
// select the newly created 'div#bruce' element and create another div#madison child element
familyTwoGrandChild = $('#bruce').append('<div id = "madison"><h3>Madison</h3></div>');
// create a sibling for the 'div#madison' element
familyTwoGrandChild.append('<div id = "hunter"><h3>Hunter</h3></div>');
// Cameron's Solution