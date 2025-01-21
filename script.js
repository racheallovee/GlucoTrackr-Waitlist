function sendMail() {
  let params = {
    email: document.getElementById("email").value,
  };

  emailjs
    .send("service_v2ktjep", "template_v5u698o", "template_ui5wknf", params) // You had a small mistake with the template parameter.
    .then((response) => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("There was an error sending your email. Please try again later.");
    });
}
