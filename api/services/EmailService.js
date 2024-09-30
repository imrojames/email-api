const nodemailer = require('nodemailer');

module.exports = {
  sendMail: async function (to, name, subject, text, link, code) {
    // Create a transporter object using SMTP transport settings
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_APP_PASS    // your Gmail password or App Password
      }
    });

    // Define email options
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: `${text} \n ${link ? link : ""} \n ${code ? code : ""} \n \n ${name ? name : 'No name'} \n Client Name \n ${to}` // Display in email format
    };

    try {
      // Send email
      let info = await transporter.sendMail(mailOptions);
      sails.log.info('Message sent: %s', info.messageId);
      return {success: true, messageId: info.messageId};
    } catch (err) {
      sails.log.error('Error occured while sending message: ', err);
      throw err;
    }
  }
}
