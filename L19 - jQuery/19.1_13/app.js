/*
 * Lesson 19.2 Quiz: you.toggleClass
 * For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
 */
// don't change this variable!
var featuredArticle;
// your code starts here!
// MY SOLUTION
featuredArticle = $("li.article-item").toggleClass("featured"); // selects the 'list' item with class 'article-item' and toggles the class 'featured'
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
navList = $('li a').first().attr('href', '#1');
// Cameron's Solution
var navList, firstItem, link;
navList = $('.nav-list');
firstItem = navList.children().first();
link = firstItem.find('a');
link.attr('href', '#1');


/*
 * Lesson 19.5 Quiz: Modifying CSS
 *  For this quiz, change the font-size of all the article-items to 20px!
 * You must use jQuery's css() method!
 */
// Start with this variable!
var articleItems;
// your code goes here!
// MY SOLUTION
articleItems = $('li.article-item').css('font-size', '20px');
// Cameron's Solution
articleItems = $('.article-item');
articleItems.css('font-size', '20px');


/*
 * Lesson 19.7 Quiz: Collecting Values
 * For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!
 * The starter code below creates an event listener that will run any time the input changes.
 * For more on events, check the instructor notes.
 */
$('#input').on('change', function() {
    var val, h1;
    // Your code goes here!
    val = $('#input').val();
    h1 = $('.articles').children('h1');
    h1.text(val);
});


/*
 * Lesson 19.8 Quiz: Removing DOM Elements
 * For this quiz, remove the <ul> from the first article item!
 * You must use jQuery's remove() method.
 */
// Start with this variable!
var articleItems;
// your code goes here!
// MY SOLUTION
articleItems = $('ul.article-list li ul').remove();