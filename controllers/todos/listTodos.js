const { Todo } = require("../../models/todo");

const listTodos = async (req, res) => {

  const result = await Todo.find({}) 

  res.json(result);
};

module.exports = listTodos;
