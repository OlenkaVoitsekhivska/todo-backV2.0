const express = require("express");

const router = express.Router();

const {
  addTodo,
  listTodos,
  removeTodo,
  updateTodo
} = require("../../controllers/todos");
const { wrapper } = require("../../helpers/wrapper");
// const { authenticate, validateBody, idValid } = require("../../middleware");
// const { postSchema, putSchema } = require("../../validation/validation");

// router.get("/", authenticate, wrapper(listTodos));

// router.get("/:id", idValid, authenticate, wrapper(getTodoById));

// router.post("/", authenticate, validateBody(postSchema), wrapper(addTodo));

// router.delete("/:id", idValid, authenticate, wrapper(removeTodo));


router.get("/",  wrapper(listTodos));

// router.post("/", wrapper(addTodo));
router.post("/", async(req,res,next)=>{
  await addTodo();
  return await listTodos();
});

// router.delete("/:id",  wrapper(removeTodo));
router.delete("/:id",  async(req,res,next)=>{
  await removeTodo();
  return await listTodos();
});


// router.put("/:id", wrapper(updateTodo));
router.put("/:id", async(req,res,next)=>{
  await updateTodo();
  return await listTodos();
});


module.exports = router;
