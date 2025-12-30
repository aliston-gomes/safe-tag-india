import express from "express";
import dotenv from "dotenv";

export const app = express();

// parses incoming json data
app.use(express.json());

// dont env configuration
dotenv.config();

// routes
// app.use("/api");

app.get("/", (req, res, next) => {
  return res.send(
    `<h1 style="color:#2B2A2A;">Safe Tag India-  Built with ♥️ in bengaluru!</h1>`
  );
});
