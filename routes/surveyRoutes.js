const mongoose = require("mongoose");
const { Path } = require("path-parser");
const { URL } = require("url");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = (app) => {
  app.get("/api/surveys", [requireLogin], async (req, res) => {
    const survey = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });
    res.status(200).send(survey);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thank you for your feedback!");
  });

  //Unique object in an array with a key
  const uniqueObjArray = (array, key) => {
    return [
      ...new Map(array.map((element) => [element[key], element])).values(),
    ];
  };

  app.post("/api/surveys/webhooks", async (req, res) => {
    const events = req.body;
    const p = new Path("/api/surveys/:surveyId/:choice");
    let results = uniqueObjArray(
      events
        .map(({ email, url }) => {
          const match = p.test(new URL(url).pathname);

          if (match) return { email, ...match };
        })
        .filter((result) => result !== undefined),
      "email"
    ).forEach(async ({ surveyId, email, choice }) => {
      await Survey.updateOne(
        {
          _id: surveyId,
          recipients: { $elemMatch: { email: email, responded: false } },
        },
        {
          $inc: { [choice]: 1 },
          $set: { "recipients.$.responded": true },
        },
        { new: true }
      );

      // console.log("survey:", survey);
    });
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
