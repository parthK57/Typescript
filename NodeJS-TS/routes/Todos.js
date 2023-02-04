"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get("/", (req, res) => {
    res.status(200).json(todos);
});
router.post("/", (req, res) => {
    const textVal = req.body.text;
    console.log(textVal);
    todos.push({
        id: todos.length,
        text: textVal,
    });
    res.status(201).send("OK");
});
router.patch("/", (req, res) => {
    const data = req.body;
    const id = parseInt(data.id);
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
    const id = parseInt(req.body.id);
    todos.splice(id, 1);
    res.status(200).json(todos);
});
exports.default = router;
