const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = (app) => {
  app.post("/api/surveys/feedback", (req, res) => {
    res.send("Thank you for your feedback!");
  });

  app.post("/api/surveys", [requireLogin, requireCredits], async (req, res) => {
    try {
      const { title, subject, body, recipients } = req.body;

      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(",").map((email) => ({
          email: email.trim(),
        })),
        _user: req.user.id,
        dateSent: Date.now(),
      });

      const mailer = new Mailer(survey, surveyTemplate(survey));
      await mailer.send();

      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });
};
