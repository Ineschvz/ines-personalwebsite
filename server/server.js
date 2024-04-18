const express = require ("express")
const path = require("path");
const app = express (); 
const PORT = 8084;

app.use(express.json()); 

app.use("/build", express.static(path.join(__dirname, "../build")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
  })
  module.exports = app;