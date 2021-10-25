const express = require("express");
const auth = require("../middleware/auth")
const { createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
} =
    require
        ("../controllers/taskController");

const router = express.Router();

router.post("/task", auth, createTask)
router.get("/tasks", auth, getAllTasks)
router.get("/tasks/:id", auth, getTaskById)
router.patch("/tasks/:id", auth, updateTask)
router.delete("/tasks/:id", auth, deleteTask)

module.exports = router