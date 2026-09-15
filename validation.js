// Gets the web form so JavaScript can validate it when it is submitted.
let form = document.getElementById("webForm");

// Gets references to the form fields that will be validated.
let visitorName = document.getElementById("visitorName");
let visitorEmail = document.getElementById("visitorEmail");
let visitorPhone = document.getElementById("visitorPhone");
let favoriteGenre = document.getElementById("favoriteGenre");

// Gets references to the areas used to display validation feedback.
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let genreError = document.getElementById("genreError");

// Gets the area used to display the overall validation result.
let validationMessage = document.getElementById("validationMessage");

// Validates the form when the visitor submits it.
function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    // Clears previous validation messages before checking the form again.
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    genreError.textContent = "";
    validationMessage.textContent = "";    

    // Checks whether the visitor's name meets the HTML validation requirements.
    if (!visitorName.checkValidity()) {
        nameError.textContent = "Please enter a name between 2 and 50 characters.";
        isValid = false;
    }

    // Checks whether the visitor entered a valid email address.
    if (!visitorEmail.checkValidity()) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Checks whether the phone number matches the required pattern if one is entered.
    if (!visitorPhone.checkValidity()) {
        phoneError.textContent = "Please enter a phone number in the format 123-456-7890.";
        isValid = false;
    }

    // Checks whether the visitor entered a favorite horror genre.
    if (!favoriteGenre.checkValidity()) {
        genreError.textContent = "Please enter or select a favorite horror genre.";
        isValid = false;
    }

    // Displays the overall validation result.
    if (isValid) {
        validationMessage.textContent = "Form submitted successfully!";
        validationMessage.className = "success-message";
        displayFormData(event);
    } else {
        validationMessage.textContent = "Please correct the errors above.";
        validationMessage.className = "error-message";
    }
}

// Runs the validation function when the form is submitted.
form.addEventListener("submit", validateForm);