// Task 1: Countdown Timer
const startTimer = () => {
    let userDefinedDuration = document.getElementById("user-defined-duration").value;
    const tickMessage = document.getElementById("tick-message");
    const countdown = setInterval(() => {
        tickMessage.innerHTML = userDefinedDuration;
        userDefinedDuration--;
        if (userDefinedDuration < 0) {
            clearInterval(countdown);
        };
    }, 1000);
};
// Task 2: Delayed Notification
const sendDelayedNotification = () => {
    const startDelay = setInterval(() => {
        const status = document.getElementById("status");
        status.innerHTML = "Five seconds have passed!"
    }, 5000);
};
// Task 3: Repeat Notification
let startRepeat;
const sendRepeatNotification = () => {
    startRepeat = setInterval(() => {
        const notification = document.createElement("p");
        notification.innerHTML = "Click \"Dismiss\" to dismiss!"
        document.getElementById("repeat-notification-container").appendChild(notification);
    }, 1000);
};
const stopRepeatNotification = () => {
    clearInterval(startRepeat);
};