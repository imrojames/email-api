// const EmailService = require("../services/EmailService");

module.exports = {
  email: async function (req, res) {
    try {
      const {email, name, subject, text} = req.body;

      await EmailService.sendMail(
        email,
        name,
        subject,
        text
      );

      return res.status(200).json({message: 'Email sent!'});
    } catch (err) {
      return res.status(500).json({message: `Error while sending email: ${err}`});
    }
  }
}
