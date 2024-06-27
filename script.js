const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("emailAddress");
const queryGeneral = document.getElementById("general");
const querySupport = document.getElementById("support")
const message = document.querySelector("textarea");
const consent = document.getElementById("consent");


function setError(element) {
      const inputSection = element.parentElement;
      const errorMessage = inputSection.querySelector(".error-message");
      
      errorMessage.style.display = "block";
}

function setSuccess(element) {
      const inputSection = element.parentElement;
      const errorMessage = inputSection.querySelector(".error-message");
      
      errorMessage.style.display = "none";
}

function validateInputs() {
      const firstNameValue = firstName.value;
      const lastNameValue= lastName.value;
      const emailAddressValue = emailAddress.value;
      // const queryValue = query.value;
      const messageValue = message.value;
      const consentValue = consent.value;

      // const queryErrorMessage = document.querySelector(".query-error");
      

      if (firstNameValue === "") {
            setError(firstName);
      } else {
            setSuccess(firstName);
      }

      if (lastNameValue === "") {
            setError(lastName);
      } else {
            setSuccess(lastName);
      }

      if (emailAddressValue === "") {
            setError(emailAddress);
      } else {
            setSuccess(emailAddress);
      }

      if (messageValue === "") {
            setError(message);
      } else {
            setSuccess(message);
      }

      
//       if (queryGeneral.valueMissing && querySupport.valueMissing) {
//             queryErrorMessage.style.display = "block";
//      }

}




form.addEventListener("submit", (e) => {
      e.preventDefault();

      validateInputs();
})