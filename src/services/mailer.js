const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: process.env.BREVO_SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASSWORD,
  },
});

const sendConfirmationMail = (to, subject, html) => {
  const mailOptions = {
    from: '"TechMend" <isuho2020@gmail.com>',
    to,
    subject,
    html: html,
  };

  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log(
        `"Email sent to" ${mailOptions.to}:   ${info.response}`,
        "services/mailer/22"
      );
    })
    .catch((err) => console.log(err, "services/mailer/22"));
};

module.exports = { sendConfirmationMail };