const { Router } = require('express');
const express = require('express');

const Todo = require('../models/Todo');

const router = express.Router();

// Create
router.post('/create', async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        return res.send({ todo });
    } catch (err) {
        return res.status(400).send({ error: 'Não foi possível criar um novo evento!'});
    }
});

// Read
router.get('/read', async (req, res) => {
    try {
        const todos = await Todo.find()
            .then(todos => res.json(todos));
    } catch (err) {
        return res.status(400).send({ error: 'Não foi possível trazer as informações!' });
    }
});

// Update
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = { new: true };

        const result = await Todo.findByIdAndUpdate(id, updates, options);

        res.send(result);

    } catch (err) {
        return res.status(400).send({ error: 'Não foi possível atualizar o evento!' });
    }
});

// Delete
router.delete('/delete/:id', (req, res) => {
    const id = Todo.deleteOne({ _id: req.params.id }, (err) => {
        if(err) {
            return res.status(400).json({
                error: true,
                message: "Não foi possível excluir o evento!"
            });
        } else {
            return res.json({
                error: false,
                message: "Evento deletado com sucesso!"
            });
        }
    });
});

module.exports = app => app.use('/api', router);