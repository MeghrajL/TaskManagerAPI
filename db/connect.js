import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;

//   .then(() => console.log("Connected to DB"))
//   .catch((err) => console.log(err));
