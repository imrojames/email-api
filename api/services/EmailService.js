const nodemailer = require('nodemailer');

module.exports = {
  sendMail: async function (to, subject, text) {
    // Create a transporter object using SMTP transport settings
    let transporter = nodemailer.createTransport({
      // using mailtrap email testing
      // host: "sandbox.smtp.mailtrap.io",
      // port: 2525,
      // auth: {
      //   user: "5bba6b2ea45819",
      //   pass: "a9f6af2337461f"
      // }

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
      text: text
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
