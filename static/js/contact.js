// contact.js

const btn = document.getElementById("button");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  // Get the reCAPTCHA token from the widget
  const recaptchaToken = grecaptcha.getResponse();

  // If user didn’t complete reCAPTCHA
  if (!recaptchaToken) {
    alert("Please confirm you’re not a robot.");
    btn.value = "Send Email";
    return;
  }

  const serviceID = "default_service";
  const templateID = "template_49nx5qe";

  emailjs
    .sendForm(serviceID, templateID, this, {
      publicKey: "hcwh1BzimepUo_Ba4", // your EmailJS public key
      "g-recaptcha-response": grecaptcha.getResponse(), // send token to EmailJS
    })
    .then(
      () => {
        btn.value = "Send Email";
        alert("Message sent!");
        form.reset();
        grecaptcha.reset(); // reset reCAPTCHA for next submission
      },
      (err) => {
        btn.value = "Send Email";
        alert("Error: " + JSON.stringify(err));
        grecaptcha.reset();
      },
    );
});

