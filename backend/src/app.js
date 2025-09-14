import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));

import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export { app };
