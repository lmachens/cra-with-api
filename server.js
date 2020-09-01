const express = require("express");

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
