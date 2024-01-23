// First name, minimum 2 letters, only letters, no spaces
// Surname, same?
// Company --
// Job Title, just letters?
// E-mail, already done - check for .com etc
// phone number, just numbers? but could be +77 etc. And max length / only uk mobile/home, lots of options
// refactor name validation

const cardForm = document.getElementById("card-form");

function handleSubmit(event) {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const jobTitleInput = document.getElementById("job-title");
  const emailInput = document.getElementById("email");
  const PhoneNumberInput = document.getElementById("phone-number");

  if (!/^[a-z]{3,}$/i.test(firstNameInput.value)) {
    const firstNameError = document.getElementById("first-name-error");
    firstNameError.innerText =
      "Name must more than 2 letters and have no spaces.";
    event.preventDefault();
  }
  if (!/^[a-z]{3,}$/i.test(lastNameInput.value)) {
    const lastNameError = document.getElementById("last-name-error");
    lastNameError.innerText =
      "Name must more than 2 letters and have no spaces.";
    event.preventDefault();
  }
  if (!/^[a-z\s]+$/gi.test(jobTitleInput.value)) {
    const jobTitleError = document.getElementById("job-title-error");
    jobTitleError.innerText = "Job Title must be letters";
    event.preventDefault();
  }
  if (!/[\w]+\@([a-z]+\.[a-z]+)+$/gi.test(emailInput.value)) {
    const emailError = document.getElementById("email-error");
    emailError.innerText = "incorrect email format";
    event.preventDefault();
  }

  if (
    !/(^(\+44|07))+\d+(-\d+)*$/gi.test(PhoneNumberInput.value) ||
    PhoneNumberInput.value.length <= 11
  ) {
    const PhoneNumberError = document.getElementById("phone-number-error");
    PhoneNumberError.innerText =
      "must start with + or 0. dashes may be included. minimum 11 digits";
    event.preventDefault();
  }
}
cardForm.addEventListener("submit", handleSubmit);
