const {Todo} = require('../../models/todo')

const addTodo = async (req, res) => {
    // const {_id: owner} = req.user;
    // const result = await todo.create({...req.body, owner});

    const result = await Todo.create(req.body);
    res.status(201).json(result);
  };

module.exports = addTodo;