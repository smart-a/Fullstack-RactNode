const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = (app) => {
  app.post("/api/surveys", [requireLogin, requireCredits], async (req, res) => {
    try {
      const { title, subject, body, recipients } = req.body;

      const survey = await new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(",").map((email) => ({
          email: email.trim(),
        })),
        _user: req.user.id,
        dateSent: Date.now(),
      }).save();

      const mailer = new Mailer(survey, surveyTemplate(survey));
      mailer.send();
    } catch (error) {
      console.log(error);
    }
  });
};
