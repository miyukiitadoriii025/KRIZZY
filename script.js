const correctPin = "3429"; // Set your 4-digit PIN here

function checkPin() {
    const enteredPin = document.getElementById("pinCode").value;
    const errorMessage = document.getElementById("error-message");
    const message = document.getElementById("message");

    if (enteredPin === correctPin) {
        // Correct PIN, show the message
        errorMessage.style.display = "none";
        message.style.display = "block";
    } else {
        // Incorrect PIN, show error message
        errorMessage.style.display = "block";
        errorMessage.textContent = "Incorrect PIN. Please try again! Clue: GAP";
        message.style.display = "none";
    }
}

// Optionally, ensure the PIN is 4 digits long before submitting
function validatePin() {
    const pinCode = document.getElementById("pinCode").value;
    if (pinCode.length === 4) {
        document.querySelector("button").disabled = false; // Enable submit button when 4 digits entered
    } else {
        document.querySelector("button").disabled = true; // Disable submit button when less than 4 digits
    }
}
