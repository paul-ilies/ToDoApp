const Task = require("../models/tasksModel");

//create Task
const createTask = async (req, res) => {

    const task = new Task({
        ...req.body,
        owner: req.user._id
    });

    try {
        await task.save();
        res.status(201).send(task)

    } catch (error) {
        res.status(500).send(error)

    }
}

//read all tasks
const getAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find({ owner: req.user._id })
        res.send(tasks)
    } catch (error) {
        res.status(500).send(error)
    }
}


//read task by id
const getTaskById = async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findOne({ _id, owner: req.user._id });
        if (!task) {
            res.status(404).send()
        }
        res.send(task);
    } catch (error) {
        res.status(500).send(error)

    }
}

//update task by id and owner
const updateTask = async (req, res) => {
    //get keys object
    const updates = Object.keys(req.body);
    //add allowed keys for update purpose
    const allowedUpdates = ["title", "description", "completed"];
    //allow verification if allowedUpdates includes the update
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    //if no operation is valid return error
    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates" })
    }

    try {
        //create tasl for validation
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        if (!task) {
            return res.status(404).send()
        }
        //allow update
        updates.forEach(update => {
            task[update] = req.body[update];
        })
        await task.save()
        res.send(task);

    } catch (error) {
        res.status(400).send(error)
    }
}

//delete task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
        if (!task) {
            res.status(404).send()
        }
        res.send(task)

    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask }