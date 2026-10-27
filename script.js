// ==========================================
// 1. GET ELEMENTS FROM THE HTML
// ==========================================
const form = document.getElementById("regform");

/* Form fields */
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const showPassword = document.getElementById("showPassword");
const showConfirmPassword = document.getElementById("showConfirmPassword");
const genderInput = document.getElementById("gender");
const dobInput = document.getElementById("dob");
const countryInput = document.getElementById("country");
const phoneInput = document.getElementById("phone");
const bioInput = document.getElementById("bio");

/* Error messages */
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const genderError = document.getElementById("genderError");
const dobError = document.getElementById("dobError");
const countryError = document.getElementById("countryError");
const phoneError = document.getElementById("phoneError");
const bioError = document.getElementById("bioError");

/* Other elements */
const successMsg = document.getElementById("successMsg");
const memberList = document.getElementById("memberList");
const memberCounter = document.getElementById("count");
const darkModeButton = document.getElementById("theme");


// ==========================================
// GET ALL
// ==========================================

const fields = form.querySelectorAll("input, select, textarea");
const errors = form.querySelectorAll(".error");


// ==========================================
// LOG EVERYTHING TO THE CONSOLE
// ==========================================

console.log("Form:", form);
console.log("Fields:", fields);
console.log("Errors:", errors);
console.log("Success message:", successMsg);
console.log("Member list:", memberList);
console.log("Member counter:", memberCounter);
console.log("Dark Mode button:", darkModeButton);


// ==========================================
// CAPTURE FORM SUBMISSION
// ==========================================

form.addEventListener("submit", function(event) {

    /* Stop the page refreshing */
    event.preventDefault();

    /* Clear previous errors */
    clearErrors();

    /* Hide previous success message */
    successMsg.classList.add("hidden");

    /*Validate the form */
    const valid = validateForm();

    // If the form is not valid, stop here
    if (!valid) {
        return;
    }

    // ==========================================
    // REGISTER MEMBER
    // ==========================================

    addMember();

    // ==========================================
    // UPDATE MEMBER COUNTER
    // ==========================================

    updateCounter();

    // ==========================================
    // SHOW SUCCESS MESSAGE
    // ==========================================

    successMsg.textContent = "Member registered successfully!";
    successMsg.classList.remove("hidden");

    // Reset the form
    form.reset();

    // Hide success message after 4 seconds
    setTimeout(function() {
        successMsg.classList.add("hidden");
    }, 4000);
});


// ==========================================
// VALIDATE EACH FIELD
// ==========================================

function validateForm() {

    let valid = true;

    // Get values from the fields
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const gender = genderInput.value;
    const dob = dobInput.value;
    const country = countryInput.value.trim();
    const phone = phoneInput.value.trim();
    const bio = bioInput.value.trim();


    // ------------------------------------------
    // Full Name
    // ------------------------------------------

    if (name === "") {

        nameError.textContent = "Full name is required.";
        nameInput.classList.add("invalid");

        valid = false;

    } else if (name.length < 2) {

        nameError.textContent = "Name must contain at least 2 characters.";
        nameInput.classList.add("invalid");

        valid = false;
    }


    // ------------------------------------------
    // Email
    // ------------------------------------------

    if (email === "") {

        emailError.textContent = "Email is required.";
        emailInput.classList.add("invalid");

        valid = false;

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        emailError.textContent = "Enter a valid email address.";
        emailInput.classList.add("invalid");

        valid = false;
    }


    // ------------------------------------------
    // Password
    // ------------------------------------------

    if (password === "") {

        passwordError.textContent = "Password is required.";
        passwordInput.classList.add("invalid");

        valid = false;

    } else if (password.length < 8) {

        passwordError.textContent =
            "Password must be at least 8 characters.";

        passwordInput.classList.add("invalid");

        valid = false;
    }


    // ------------------------------------------
    // Confirm Password
    // ------------------------------------------

    if (confirmPassword === "") {

        confirmError.textContent =
            "Please confirm your password.";

        confirmPasswordInput.classList.add("invalid");

        valid = false;

    } else if (confirmPassword !== password) {

        confirmError.textContent =
            "Passwords do not match.";

        confirmPasswordInput.classList.add("invalid");

        valid = false;
    }


    // ------------------------------------------
    // Gender
    // ------------------------------------------

    if (gender === "") {

        genderError.textContent =
            "Please select a gender.";

        genderInput.classList.add("invalid");

        valid = false;
    }


    // ------------------------------------------
    // Date of Birth
    // ------------------------------------------

    if (dob === "") {

        dobError.textContent =
            "Date of birth is required.";

        dobInput.classList.add("invalid");

        valid = false;

    } else if (new Date(dob) > new Date()) {

        dobError.textContent =
            "Date of birth cannot be in the future.";

        dobInput.classList.add("invalid");

        valid = false;
    }


    // ------------------------------------------
    // Country
    // ------------------------------------------

    if (country === "") {

        countryError.textContent =
            "Country is required.";

        countryInput.classList.add("invalid");

        valid = false;
    }


    // ------------------------------------------
    // Phone Number
    // ------------------------------------------

    if (phone === "") {

        phoneError.textContent =
            "Phone number is required.";

        phoneInput.classList.add("invalid");

        valid = false;

    } else if (!/^\+?[0-9\s()-]{7,20}$/.test(phone)) {

        phoneError.textContent =
            "Enter a valid phone number.";

        phoneInput.classList.add("invalid");

        valid = false;
    }


    // ------------------------------------------
    // Bio
    // ------------------------------------------

    if (bio === "") {

        bioError.textContent =
            "Bio is required.";

        bioInput.classList.add("invalid");

        valid = false;

    } else if (bio.length < 10) {

        bioError.textContent =
            "Bio must contain at least 10 characters.";

        bioInput.classList.add("invalid");

        valid = false;
    }


    return valid;
}


// ==========================================
// CLEAR ERRORS
// ==========================================

function clearErrors() {

    /*error messages */
    errors.forEach(function(error) {
        error.textContent = "";
    });

    /* red borders */
    fields.forEach(function(field) {
        field.classList.remove("invalid");
    });
}


// Clear individual error

nameInput.addEventListener("input", function() {

    if (nameInput.value.trim() !== "") {

        nameError.textContent = "";
        nameInput.classList.remove("invalid");
    }
});


emailInput.addEventListener("input", function() {

    if (emailInput.value.trim() !== "") {

        emailError.textContent = "";
        emailInput.classList.remove("invalid");
    }
});


passwordInput.addEventListener("input", function() {

    if (passwordInput.value.length >= 8) {

        passwordError.textContent = "";
        passwordInput.classList.remove("invalid");
    }
});


confirmPasswordInput.addEventListener("input", function() {

    if (
        confirmPasswordInput.value ===
        passwordInput.value
    ) {

        confirmError.textContent = "";
        confirmPasswordInput.classList.remove("invalid");
    }
});


genderInput.addEventListener("change", function() {

    if (genderInput.value !== "") {

        genderError.textContent = "";
        genderInput.classList.remove("invalid");
    }
});


dobInput.addEventListener("change", function() {

    if (dobInput.value !== "") {

        dobError.textContent = "";
        dobInput.classList.remove("invalid");
    }
});


countryInput.addEventListener("input", function() {

    if (countryInput.value.trim() !== "") {

        countryError.textContent = "";
        countryInput.classList.remove("invalid");
    }
});


phoneInput.addEventListener("input", function() {

    if (phoneInput.value.trim() !== "") {

        phoneError.textContent = "";
        phoneInput.classList.remove("invalid");
    }
});


bioInput.addEventListener("input", function() {

    if (bioInput.value.trim() !== "") {

        bioError.textContent = "";
        bioInput.classList.remove("invalid");
    }
});


// ==========================================
// REGISTER MEMBER
// ==========================================

function addMember() {

    // Remove the "No members yet" message
    const emptyMessage = document.getElementById("emptyNote");

    if (emptyMessage) {
        emptyMessage.remove();
    }


    //list item
    const listItem = document.createElement("li");

    listItem.classList.add("member-item");


    const info = document.createElement("div");

    info.classList.add("info");

    const memberName = document.createElement("strong");

    memberName.textContent =
        nameInput.value.trim();

    const memberDetails = document.createElement("span");

    memberDetails.textContent =
        emailInput.value.trim() +
        " • " +
        genderInput.options[genderInput.selectedIndex].text +
        " • " +
        countryInput.value.trim();


    const memberBio = document.createElement("span");

    memberBio.textContent =
        "Bio: " + bioInput.value.trim();

    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";

    removeButton.classList.add("remove");

    removeButton.type = "button";

    info.appendChild(memberName);

    info.appendChild(memberDetails);

    info.appendChild(memberBio);


    // Add information and button to list item
    listItem.appendChild(info);

    listItem.appendChild(removeButton);


    // Add member to the list
    memberList.appendChild(listItem);


 

    removeButton.addEventListener("click", function() {

        listItem.remove();

        updateCounter();


        // If there are no members left
        if (
            memberList.querySelectorAll(".member-item").length === 0
        ) {

            const emptyMessage = document.createElement("li");

            emptyMessage.classList.add("empty");

            emptyMessage.id = "emptyNote";

            emptyMessage.textContent =
                "No members yet. Register someone to begin.";

            memberList.appendChild(emptyMessage);
        }
    });
}


function updateCounter() {

    const members =
        memberList.querySelectorAll(".member-item");

    memberCounter.textContent = members.length;
}

darkModeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeButton.textContent = "Light Mode";

    } else {

        darkModeButton.textContent = "Dark Mode";
    }
});
showPassword.addEventListener("click", function() {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        showPassword.textContent = "Show";
    }

});
showConfirmPassword.addEventListener("click", function() {

    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        showConfirmPassword.textContent = "Hide";
    } else {
        confirmPasswordInput.type = "password";
        showConfirmPassword.textContent = "Show";
    }

});