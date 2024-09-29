import express from 'express';
import Activities from "./models.js"; 

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const activities = await Activities.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving activities", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { id, description, time } = req.body;
    const newActivity = new Activities({
      id: id,
      description: description,
      time: time,
    });
    await newActivity.save(); 
    res.json(newActivity);
  } catch (error) {
    res.status(500).json({ message: "Error adding new activity", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Activities.findOneAndDelete({ id: parseInt(id) });
    res.json({ message: "Your selected Activity was successfully deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting activity", error });
  }
});

export default router;