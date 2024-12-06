import express from "express";
const router = express.Router();
import {User} from "../models/User.js";
router.get("/", async (req, res) => {
  console.log(req.body)
  const { q } = req.query; 
  console.log(q , "name")
  try {
    if (!q) {
      return res.status(400).json({ message: "Query parameter 'q' is required." });
    }

    const users = await User.find({
      $or: [
        { first_name: { $regex: q, $options: "i" } },
        { last_name: { $regex: q, $options: "i" } },
      ],
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export {router}
