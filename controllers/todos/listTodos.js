const { Todo } = require("../../models/todo");

const listTodos = async (req, res) => {

  const result = await Todo.find({}) 
const updatedRes = result.map(({_id,desciption,complete})=>{
return{
  id:_id,
  desciption,
  complete
}
})
  res.json(updatedRes);
};

module.exports = listTodos;
