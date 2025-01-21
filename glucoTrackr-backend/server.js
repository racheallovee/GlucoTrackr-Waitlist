const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express(); // Initialize the app
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));
// Route for root
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Serve the frontend HTML file
});

// Route for email subscription
app.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rachealloveo6@gmail.com",
      pass: "ariana7360",
    },
  });

  const mailOptions = {
    from: "rachealloveo6@gmail.com",
    to: email,
    subject: "Welcome to GlucoTrackr!",
    text: "Thank you for joining our waitlist!",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email" });
    }
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
