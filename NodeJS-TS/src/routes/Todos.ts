import { Router } from "express";
import { Todos } from "../models/Todos";

const router = Router();

const todos: Array<Todos> = [];
type Body = { id: string; text: string };

router.get("/", (req, res) => {
  res.status(200).json(todos);
});

router.post("/", (req, res) => {
  const body = req.body as Body; // Type casting
  const textVal = body.text;
  console.log(textVal);
  todos.push({
    id: todos.length,
    text: textVal,
  });
  res.status(201).send("OK");
});

router.patch("/", (req, res) => {
  const body: Body = req.body as Body; // Type casting
  const id: number = parseInt(body.id);
  const text = body.text;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].text = text;
      res.status(200).json(todos);
      break;
    }
  }
});

router.delete("/", (req, res) => {
  const body = req.body as Body; // Type casting
  const id: number = parseInt(body.id);
  todos.splice(id, 1);
  res.status(200).json(todos);
});

export default router;
