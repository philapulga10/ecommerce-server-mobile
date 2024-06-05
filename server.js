import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";

import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoutes);

app.get("/", (_, res) => {
  return res.status(200).send("<h1>Welcome to node server ecommerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`.bgMagenta.white);
});
