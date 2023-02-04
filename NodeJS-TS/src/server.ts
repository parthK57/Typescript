import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

import todoRoutes from "./routes/Todos";

app.use(todoRoutes);

app.listen(3000, () => console.log("http://localhost:3000"));
