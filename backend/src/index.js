import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "../src/db/index.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR", error);
    });

    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection failed!! ", error);
  });
