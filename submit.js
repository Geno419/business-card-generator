const string = document.location.search;
const queries = new URLSearchParams(string);

const firstName = queries.get("first-name");
const lastName = queries.get("last-name");
const companyName = queries.get("company");
const jobTitle = queries.get("job-title");
const email = queries.get("email");
const phoneNumber = queries.get("phone-number");

const inputName = document.getElementById("name");
const title = document.getElementById("title");
inputName.innerText = `${firstName} ${lastName}`;
title.innerText = `${jobTitle}`;
const contactInfo = document.getElementById("contact-info");
contactInfo.innerHTML = `Email: ${email}<br>Phone: ${phoneNumber}`;
const logo = document.getElementById("logo");
logo.innerHTML = `${companyName}`;
