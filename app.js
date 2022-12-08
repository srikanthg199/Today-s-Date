const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  response.send(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
});

app.listen(2500);

module.exports = app;
