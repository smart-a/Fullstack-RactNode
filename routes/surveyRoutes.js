const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");

module.exports = (app) => {
  app.post("api/surveys", [requireLogin, requireCredits], async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = await Survey.create({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((email) => ({
        email: email.trim(),
      })),
      _user: req.user.id,
      dateSent: Date.now(),
    }).save();

    const mailer = new Mailer();
  });
};
