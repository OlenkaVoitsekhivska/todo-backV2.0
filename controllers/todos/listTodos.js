const { Todo } = require("../../models/todo");

const listTodos = async (req, res) => {
const {_id:owner} = req.user;
  const result = await Todo.find({owner}).populate("owner") 

const updatedRes = result.map(({_id,description,complete})=>{
return{
  id:_id,
  description,
  complete,

}
})
  // res.json(updatedRes);
  res.json(updatedRes);
};

module.exports = listTodos;
