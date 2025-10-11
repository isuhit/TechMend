function getConfirmationHtml({ name, repairId }) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TechMend Repair Confirmation</title>
    <style>
      body {
        font-family: 'Inter', Arial, sans-serif;
        background-color: #f6f7f9;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
      .header {
        background: #1173d4;
        color: white;
        text-align: center;
        padding: 30px 20px;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .body {
        padding: 30px 20px;
      }
      .body h2 {
        color: #1173d4;
        font-size: 20px;
        margin-top: 0;
      }
      .body p {
        line-height: 1.6;
        font-size: 15px;
      }
      .repair-id {
        display: inline-block;
        margin: 12px 0;
        background: #f0f7ff;
        color: #1173d4;
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 600;
        font-size: 14px;
      }
      .footer {
        background: #f8f9fa;
        text-align: center;
        padding: 20px;
        font-size: 13px;
        color: #666;
      }
      .footer a {
        color: #1173d4;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>TechMend</h1>
        <p>Reliable PC Repair Services</p>
      </div>

      <div class="body">
        <h2>Repair Request Received ✅</h2>
        <p>Hi ${name || 'Customer'},</p>
        <p>
          Thank you for submitting your repair request to <strong>TechMend</strong>.
          Our technician team has received your details and will contact you soon to confirm the appointment.
        </p>

        <p>Your Repair Reference ID:</p>
        <div class="repair-id">#${repairId || 'TEMP12345'}</div>

        <p>
          You can expect a confirmation call or email within the next few hours.
          Please ensure your contact details are correct and keep your device available for inspection.
        </p>

        <p>
          If you need to update your request or provide additional information,
          simply reply to this email or contact us via our website.
        </p>

        <p>We appreciate your trust in TechMend.</p>
        <p style="margin-top: 20px;">— The TechMend Team</p>
      </div>

      <div class="footer">
        <p>Need help? <a href="mailto:support@techmend.com">Contact Support</a></p>
        <p>© ${new Date().getFullYear()} TechMend. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
}

function getStatusEmail({ customerName, status, ticketId }) {
   const currentYear = new Date().getFullYear();

  return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Repair Request Update — TechMend</title>
</head>
<body style="margin:0; padding:0; background:#f5f7fa; font-family:Arial, sans-serif; color:#1f2937;">
  <!-- Hidden preview text -->
  <span style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f5f7fa;">
    Your TechMend repair request status has been updated.
  </span>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa; padding:30px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background:#10b981; padding:20px 24px; text-align:center;">
              <h1 style="margin:0; font-size:22px; color:#ffffff; font-weight:700;">TechMend</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">
              <!-- Greeting -->
              <p style="margin:0 0 16px 0; font-size:16px;">Hello <strong>${customerName}</strong>,</p>

              <!-- Introduction -->
              <p style="margin:0 0 20px 0; font-size:15px; color:#4b5563; line-height:1.6;">
                We wanted to inform you that there has been an update to your repair request. Keeping you informed is important to us, and we are committed to ensuring your device gets the attention it needs.
              </p>

              <!-- Status -->
              <p style="margin:0 0 20px 0; font-size:15px; color:#4b5563; line-height:1.6;">
                Your current repair status is:
              </p>

              <p style="margin:0 0 24px 0; display:inline-block; padding:14px 20px; background:#d1fae5; color:#065f46; border-radius:8px; font-weight:600; font-size:16px;">
                ${status}
              </p>

              <!-- Ticket info -->
              <p style="margin:0 0 24px 0; font-size:14px; color:#6b7280;">
                Repair Request ID: <strong>${ticketId}</strong>
              </p>

              <!-- Next steps -->
              <p style="margin:0 0 20px 0; font-size:14px; color:#4b5563; line-height:1.6;">
                What happens next: Our team will continue to work on your device according to the schedule. You will receive another update once your repair is completed or if additional information is required.
              </p>

              <!-- Reassurance -->
              <p style="margin:0 0 16px 0; font-size:14px; color:#4b5563; line-height:1.6;">
                We value your trust and strive to provide a smooth repair experience. Thank you for choosing TechMend — your device is in good hands.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f3f4f6; padding:24px 36px; text-align:center; font-size:13px; color:#6b7280;">
              <p style="margin:0;">Thanks for choosing TechMend.</p>
              <p style="margin:6px 0 0 0;">© ${currentYear} TechMend. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}



module.exports = { getConfirmationHtml, getStatusEmail };
