import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));

export { app };
