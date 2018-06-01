/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var T = 60;

while (T >= 0) {
    if (T > 50 && T <= 60) {
        console.log("T-" + T + " seconds");
    }
    if (T === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    if (T > 31 && T < 50) {
        console.log("T-" + T + " seconds");
    }
    if (T === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    if (T > 16 && T < 31) {
        console.log("T-" + T + " seconds");
    }
    if (T === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    if (T > 10 && T < 16) {
        console.log("T-" + T + " seconds");
    }
    if (T === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    if (T > 6 && T < 10) {
        console.log("T-" + T + " seconds");
    }
    if (T === 6) {
        console.log("Main engine start");
    }
    if (T > 1 && T < 6) {
        console.log("T-" + T + " seconds");
    }
    if (T === 1) {
        console.log("T-" + T + " seconds");
    }
    if (T === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    T = T - 1;
}