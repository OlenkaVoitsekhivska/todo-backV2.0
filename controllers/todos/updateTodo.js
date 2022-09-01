const { Todo } = require("../../models/todo");

const { requestError } = require("../../helpers");


const updateTodo = async (req, res) => {
  const { id } = req.params;
  console.log(req.body)
  // const {complete:prevComplete} = await Todo.findById(id)
  const prevTodo = await Todo.findById(id)

  // const result = await Todo.findByIdAndUpdate(id, { complete: !prevComplete });
  const result = await Todo.findByIdAndUpdate(id, prevTodo);

  if (!result) {
    throw requestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateTodo;
