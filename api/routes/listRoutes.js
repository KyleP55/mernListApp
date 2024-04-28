const express = require('express');
const router = express.Router();

const itemSchema = require('../schema/itemSchema.js');

// Create
router.post('/', async (req, res) => {
    try {
        const item = new itemSchema({
            text: req.body.text,
            owner: req.body.owner ? req.body.owner : "Anon"
        });

        const newItem = await item.save();

        res.status(200).json(newItem);
    } catch (err) {
        console.log(err);
        res.status(400);
    }
});

// Get All
router.get('/getAll', async (req, res) => {
    try {
        const items = await itemSchema.find();
        res.status(200).json(items);
    } catch (err) {
        console.log(err);
        res.status(400);
    }
});

// Get One
router.get('/:id', async (req, res) => {
    const filter = { _id: req.params.id };
    try {
        const items = await itemSchema.findOne(filter);
        res.status(200).json(items);
    } catch (err) {
        console.log(err);
        res.status(400);
    }
});

// Update
router.put('/:id', async (req, res) => {
    const filter = { _id: req.params.id };
    const update = { text: req.body.text };
    try {
        const items = await itemSchema.updateOne(filter, update);
        console.log(items)
        res.status(200).json(items);
    } catch (err) {
        console.log(err);
        res.status(400);
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    const filter = { _id: req.params.id };

    try {
        const items = await itemSchema.findOneAndDelete(filter);
        res.status(200).json(items);
    } catch (err) {
        console.log(err);
        res.status(400);
    }
});

module.exports = router;