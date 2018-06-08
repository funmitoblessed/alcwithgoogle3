/*
 *
 * Lesson 16-11 Quiz: Facebook Friends (7-5)
 * 
 * Directions:
 * Create an object called facebookProfile. The object should have 3 properties:
 * 
 * your "name"
 * the number of "friends" you have, and
 * an array of "messages" you've posted (as strings)
 * The object should also have 4 methods:
 * 
 * "postMessage(message)" - adds a new message string to the array
 * "deleteMessage(index)" - removes the message corresponding to the index provided
 * "addFriend()" - increases the friend count by 1
 * "removeFriend()" - decreases the friend count by 1
 * 
 */

// SOLUTION
var facebookProfile = {
    name: "Funmito",
    friends: 1000,
    messages: ["Good to be here", "I am happy so happy today", "Today is going to be a great day"],
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index);
    },
    addFriend: function addFriend() {
        facebookProfile.friends += 1;
    },
    removeFriend: function removeFriend() {
        facebookProfile.friends -= 1;
    }
};