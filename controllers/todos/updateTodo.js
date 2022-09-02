const { Todo } = require("../../models/todo");

const { requestError } = require("../../helpers");


const updateTodo = async (req, res) => {
  const { id } = req.params;
  const {description} = req.body;
  console.log(req.body)
  // const {complete:prevComplete} = await Todo.findById(id)


  const result = await Todo.findByIdAndUpdate(id, {description});


  if (!result) {
    throw requestError(404, "Not found");
  }
  // res.json(result);
  res.json({
    message:"Todo updated successfully",
    id:result._id
  });
};

module.exports = updateTodo;
