import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import User from "./models/user.js";

dotenv.config();
const app = express();

app.use(cors({origin: '*'}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/api/test", (req, res) => {
  res.send("Backend Working");
});

app.post("/api/auth/login", async (req, res) => {
try {
    const { email, password } = req.body;

    // SAVE TO MONGODB
    const user = await User.create({
      email,
      password
    });

    res.json({
      success: true,
      message: "User saved successfully",
      user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

const uri = process.env.MONGO_URI;

mongoose.set("strictQuery", false);

mongoose.connect(uri)
  .then(() => {
    console.log("Database Connected (Local MongoDB)");
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });
