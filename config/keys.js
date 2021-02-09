//
if (process.env.NODE_ENV === "production") {
  // production enviroment key
  module.exports = require("./prod");
} else {
  // development enviroment key
  module.exports = require("./dev");
}
