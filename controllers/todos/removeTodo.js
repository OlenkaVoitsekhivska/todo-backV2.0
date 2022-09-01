const { Todo } = require("../../models/todo");

const { RequestError } = require("../../helpers");

const removeTodo = async (req, res) => {
  const { id } = req.params;
  const result = await Todo.findByIdAndRemove(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    message: "todo deleted",
  });
};

module.exports = removeTodo;
