const { Todo } = require("../../models/todo");

const { RequestError } = require("../../helpers");

const removeTodo = async (req, res) => {
  const { id } = req.params;
  const result = await Todo.findByIdAndRemove(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json({
    message: "todo deleted",
    todo:{
      ...result,
      id:result._id
    }
  });
};

module.exports = removeTodo;
