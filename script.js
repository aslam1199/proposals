// Track the No button click count to toggle position
let noButtonClicks = 0;

document.getElementById("yesButton").addEventListener("click", function() {
    // Open the congratulatory page on Yes click
    window.open("congratulations.html", "_blank"); // Opens new tab with congratulatory page
});

document.getElementById("noButton").addEventListener("click", function() {
    // Increment the No button click count
    noButtonClicks++;

    // Swap the position of Yes and No buttons after every No click
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    if (noButtonClicks % 2 === 1) {
        yesButton.style.order = "2"; // Move Yes button to right
        noButton.style.order = "1"; // Move No button to left
    } else {
        yesButton.style.order = "1"; // Reset Yes button to left
        noButton.style.order = "2"; // Reset No button to right
    }
});
