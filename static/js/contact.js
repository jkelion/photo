const btn = document.getElementById("button");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  btn.value = "Sending...";

  // Get the reCAPTCHA token from the first widget
  const recaptchaWidget = document.querySelector(".g-recaptcha");
  const recaptchaResponse = grecaptcha.getResponse(
    recaptchaWidget.getAttribute("data-widget-id")
      ? parseInt(recaptchaWidget.getAttribute("data-widget-id"))
      : 0
  );

  if (!recaptchaResponse) {
    alert("Please check the reCAPTCHA box before sending.");
    btn.value = "Send Email";
    return;
  }

  const serviceID = "default_service";
  const templateID = "template_49nx5qe";

  emailjs
    .sendForm(serviceID, templateID, this, {
      publicKey: "hcwh1BzimepUo_Ba4",
    })
    .then(
      () => {
        btn.value = "Send Email";
        alert("Message sent!");
        form.reset();
        grecaptcha.reset();
      },
      (err) => {
        btn.value = "Send Email";
        alert("Error: " + JSON.stringify(err));
        grecaptcha.reset();
      }
    );
});

