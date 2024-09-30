// const EmailService = require("../services/EmailService");

module.exports = {
  email: async function (req, res) {
    try {
      const {email, name, subject, text, link, code} = req.body;

      if (name) {
        await EmailService.sendMail(
          email,
          name,
          subject,
          text,
          link,
          code
        );
      } else {
        return res.json({
          error: "Name is required."
        })
      }

      return res.status(200).json({message: 'Email sent!'});
    } catch (err) {
      return res.status(500).json({message: `Error while sending email: ${err}`});
    }
  }
}
