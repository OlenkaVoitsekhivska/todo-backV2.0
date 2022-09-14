const express = require("express");

const router = express.Router();

const {
  addTodo,
  listTodos,
  removeTodo,
  updateTodo,
  toggleComplete
} = require("../../controllers/todos");
const { wrapper } = require("../../helpers/wrapper");
const { authenticate, validateBody, idValid } = require("../../middleware");
// const { postSchema, putSchema } = require("../../validation/validation");

// router.get("/", authenticate, wrapper(listTodos));

// router.get("/:id", idValid, authenticate, wrapper(getTodoById));

// router.post("/", authenticate, validateBody(postSchema), wrapper(addTodo));

// router.delete("/:id", idValid, authenticate, wrapper(removeTodo));




router.get("/", authenticate, wrapper(listTodos));

router.post("/", authenticate, wrapper(addTodo));


router.delete("/:id", authenticate,  wrapper(removeTodo));



router.put("/:id",authenticate, wrapper(updateTodo));

router.patch('/:id', authenticate, wrapper(toggleComplete))



module.exports = router;
