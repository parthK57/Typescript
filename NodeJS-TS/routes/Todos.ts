import { Router } from "express";
import { Todos } from "../models/Todos";

const router = Router();

const todos: Array<Todos> = [];

router.get("/", (req, res) => {
  res.status(200).json(todos);
});

router.post("/", (req, res) => {
  const textVal: string = req.body.text;
  console.log(textVal);
  todos.push({
    id: todos.length,
    text: textVal,
  });
  res.status(201).send("OK");
});

router.patch("/", (req, res) => {
  const data = req.body;
  const id: number = parseInt(data.id);
  const text = data.text;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].text = text;
      res.status(200).json(todos);
      break;
    }
  }
});

router.delete("/", (req, res) => {
  const id: number = parseInt(req.body.id);
  todos.splice(id, 1);
  res.status(200).json(todos);
});

export default router;
