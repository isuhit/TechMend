const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: Number(process.env.BREVO_SMTP_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASSWORD,
  },
    tls: {
    rejectUnauthorized: false, // prevents Railway SSL handshake issues
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
    .catch((err) => console.log(err, "services/mailer/30"));
};

module.exports = { sendConfirmationMail };