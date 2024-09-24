// const EmailService = require("../services/EmailService");

module.exports = {
  email: async function (req, res) {
    try {
      const {email, subject, text} = req.body;

      await EmailService.sendMail(
        email,
        subject,
        text
      );

      sails.log.info('Email sent!');
      return res.status(200).json({message: 'Email sent!'});
    } catch (err) {
      sails.log.error(`Error while sending email: ${err}`);
      return res.status(500).json({message: `Error while sending email: ${err}`});
    }
  }
}
