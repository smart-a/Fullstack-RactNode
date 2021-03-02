const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const { token, amount, description } = req.body;
    await stripe.charges.create({
      amount: amount,
      currency: "usd",
      source: token.id,
      description: description,
    });

    req.user.credits += amount / 100;
    const user = await req.user.save();
    res.send(user);
  });
};
