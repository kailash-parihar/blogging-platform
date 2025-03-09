const mongoose = require("mongoose");

async function dbConfig() {
  try {
    await mongoose
      .connect(process.env.MONGO_DB_URI + process.env.DB_NAME)
      .then(() => {
        console.log(`\nMongoDB is Connected to Database:
          Database Host: ${process.env.MONGO_DB_URI}
          Database Name: ${process.env.DB_NAME}\n`);
      });
  } catch (error) {
    console.log(`\nMongoDB Connection Error :-
      Error Name : ${error.name}
      Error Message : ${error.message}\n`);
  }
}

module.exports = { dbConfig };
