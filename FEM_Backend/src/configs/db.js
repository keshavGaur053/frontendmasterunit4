const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://keshav:keshav@cluster0.ryt59.mongodb.net/frontendmasters?retryWrites=true&w=majority"
  );
};
module.exports = connect;
