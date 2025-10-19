const brevo = require("@getbrevo/brevo");
require("dotenv").config();

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

async function sendMail(to, subject, htmlContent) {

  const sendSmtpEmail = new brevo.SendSmtpEmail();
  // 2. Assign properties directly to the object
  sendSmtpEmail.sender = { email: "isuho2020@gmail.com", name: "TechMend" };
  sendSmtpEmail.to = [{ email: to }];
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = htmlContent;
  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email sent:", response.messageId || "OK");
    // return response;
  } catch (error) {

    console.log( "❌ Email send failed:",error);
     throw error;
  }
}

module.exports = { sendMail };
