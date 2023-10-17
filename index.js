import express from "express";
import router from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import notFound from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/tasks", router);

app.use(notFound);
app.use(errorHandlerMiddleware);

//server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`Connected to DB & Server is listening on port ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
