/*
 * Lesson 19.2 Quiz: you.toggleClass
 * For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/
// don't change this variable!
var featuredArticle;  
// your code starts here!
// MY SOLUTION
featuredArticle = $( "li.article-item" ).toggleClass( "featured" ); // selects the 'list' item with class 'article-item' and toggles the class 'featured'
// Cameron's  Solution
var featured;
featured = $('.featured');
featured.toggleClass('featured');


/*
 * Lesson 19.3 Quiz: toggling Classes
 * For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!
 * You must use jQuery's toggleClass method!
*/
// don't change these variable!
var article2, article3; 
// your code goes here!
// MY SOLUTION
article2 = $('.featured').toggleClass('featured'); // finds the element with the 'featured' class and toggles the class
article3 = article2.next().toggleClass('featured'); // finds the next sibling of the article2 element and then toggles the 'featured' class
// Cameron's Solution 
article2 = $('.featured');
article3 = article2.next();
article2.toggleClass('featured');
article3.toggleClass('featured');


/*
 * Lesson 19.4 Quiz: Changing Attributes
 * For this quiz, set the href of the <a> in the first nav item to "#1".
 * You must use jQuery's attr() method!
*/
// Start with this variable!
var navList;
// your code goes here!
// MY SOLUTION
navList = ;