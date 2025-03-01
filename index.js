const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config()

connectToDo()

app.listen(8080, () => {
    console.log("server started")
});