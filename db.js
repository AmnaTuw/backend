const mongoose = require("mongoose");

connectDB();
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://Am:Am1234@cluster0.hyaeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log("database connected!");
  } catch (err) {
    console.log(err);
  }
}
