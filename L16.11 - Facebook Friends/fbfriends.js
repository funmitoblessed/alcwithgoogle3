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
    // postMessage method. Takes in a message as string and adds to the messages array
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
    },
    // deleteMessage method. reomves the message corresponding to the provided index
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
    },
    // addFriend method. Increases friend count by 1
    addFriend: function addFriend() {
        facebookProfile.friends += 1;
    },
    // deleteFriend method. Decreases friend count by 1
    removeFriend: function removeFriend() {
        facebookProfile.friends -= 1;
    }
};