const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
const keys = require("./config/keys");
const app = express();

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

require("./routes/authRoutes")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listent on port ${port} ...`));
