import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello how are you");
});

app.listen(5000, () => {
  console.log("APP is running at port 5000");
});
