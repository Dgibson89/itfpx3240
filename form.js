// Reads the information entered into the contact form.
function displayFormData(event) {

    // Prevents the form from refreshing the page when submitted.
    event.preventDefault();

    // Gets the visitor's name from the form.
    let visitorName = document.getElementById("visitorName").value;

    // Gets the visitor's email address from the form.
    let visitorEmail = document.getElementById("visitorEmail").value;

    // Gets the visitor's phone number from the form.
    let visitorPhone = document.getElementById("visitorPhone").value;

    // Gets the visitor's favorite horror genre from the datalist text field.
    let favoriteGenre = document.getElementById("favoriteGenre").value;

    // Gets all radio buttons in the horrorExperience group.
    let horrorExperienceOptions = document.getElementsByName("horrorExperience");

    // Stores the selected horror experience.
    let horrorExperience = "";

    // Loops through the radio buttons to find the selected option.
    for (let i = 0; i < horrorExperienceOptions.length; i++) {
        if (horrorExperienceOptions[i].checked) {
                horrorExperience = horrorExperienceOptions[i].value;
        }
    }

    // Gets all checkboxes in the horrorFeatures group.
    let horrorFeatureOptions = document.getElementsByName("horrorFeatures");

    // Stores all selected horror game features.
    let selectedHorrorFeatures = [];

    // Loops through the checkboxes and stores each selected feature.
    for (let i = 0; i < horrorFeatureOptions.length; i++) {
        if (horrorFeatureOptions[i].checked) {
            selectedHorrorFeatures.push(horrorFeatureOptions[i].value);
        }
    }

    // Gets the visitor's selected gaming platform from the drop-down menu.
    let platform = document.getElementById("platform").value;

    // Logs the name to confirm that the form value was read correctly.
    console.log("Visitor Name: " + visitorName);

    // Logs the email to confirm that the form value was read correctly.
    console.log("Visitor Email: " + visitorEmail);

    // Logs the phone number to confirm that the form value was read correctly.
    console.log("Visitor Phone: " + visitorPhone);

    // Logs the favorite genre to confirm that the form value was read correctly.
    console.log("Favorite Horror Genre: " + favoriteGenre);

    // Logs the preffered experience to confirm that the form value was read correctly.
    console.log("Preferred Horror Experience: " + horrorExperience);

    // Logs the selected features to confirm that the form value was read correctly.
    console.log("Selected Horror Features: " + selectedHorrorFeatures.join(", "));

    // Logs the preferred platform to confirm that the form value was read correctly.
    console.log("Preferred Platform: " + platform);

    // Builds a formatted summary of the submitted form information.
    let formSummary =
    "<h2>Your Submitted Information</h2>" +
    "<p><strong>Name:</strong> " + visitorName + "</p>" +
    "<p><strong>Email:</strong> " + visitorEmail + "</p>" +
    "<p><strong>Phone:</strong> " + visitorPhone + "</p>" +
    "<p><strong>Favorite Horror Genre:</strong> " + favoriteGenre + "</p>" +
    "<p><strong>Favorite Horror Features:</strong> " + selectedHorrorFeatures.join(", ") + "</p>" +
    "<p><strong>Preferred Horror Experience:</strong> " + horrorExperience + "</p>" +
    "<p><strong>Preferred Platform:</strong> " + platform + "</p>";

    // Displays the completed form summary below the contact form.
    document.getElementById("formOutput").innerHTML = formSummary;

}

// Runs the displayFormData function when the contact form is submitted.
// Commented out to allow validation.js to validate the form before anything is displayed.
// document.getElementById("webForm").addEventListener("submit", displayFormData);