const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user:"98e137001@smtp-brevo.com",
      pass:"bMVRTFx4vyO3kLUs"
    }
  });

  const sendConfirmationMail = (to, subject, html) => {
    const mailOptions = {
        from: '"TechMend" <isuho2020@gmail.com>',
        to,
        subject,
        html: html
    }

    return transporter.sendMail(mailOptions).then(info =>{
        console.log(`"Email sent to" ${mailOptions.to}:   ${info.response}`);
    }).catch(err => console.log(err));
  }

    module.exports = {sendConfirmationMail};