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
    jobTitleError.innerText = "Job Title only must be letters";
    event.preventDefault();
  }
}

cardForm.addEventListener("submit", handleSubmit);
