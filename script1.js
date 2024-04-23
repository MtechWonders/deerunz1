// Define a mapping of subjects to their corresponding PINs
var subjectPINs = {
    "maths": "7057",
    "english": "7705",
    // Add PINs for other subjects here
    // "subject_name": "pin",
};

// Add an event listener to the input field to monitor for PIN entry
document.getElementById("pinInput").addEventListener("input", function() {
    var input = this.value;
    // Iterate over the subjectPINs object to check if the entered PIN matches any subject
    for (var subject in subjectPINs) {
        if (subjectPINs.hasOwnProperty(subject)) {
            // If the entered PIN matches the PIN for the current subject
            if (input === subjectPINs[subject]) {
                // Redirect to the corresponding subject page
                window.location.href = subject + ".html";
                return; // Exit the function to prevent further checks
            }
        }
    }
});
