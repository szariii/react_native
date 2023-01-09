const express = require("express");
const app = express();
app.use(express.json()); // należy pamiętać o nagłówku w fetch-u
// app.use(express.text()) // w razie problemów z danymi użyj text()
const PORT = 3000;

let arr = [
];
app.post("/add", function (req, res) {
  const filteringArray = arr.filter(
    (ele) => ele.username === req.body.username
  );
  console.log(filteringArray);
  if (filteringArray.length === 0) {
    arr.push({
      username: req.body.username,
      password: req.body.password,
      id: req.body.id,
      date: req.body.date,
    });
    console.log(arr);
    res.send({ communicate: "user added" });
  } else {
    res.send({ communicate: "user exist" });
  }
});

app.get("/get", function (req, res) {
  res.send(arr);
});

app.delete("/delete", function (req, res) {
  console.log("doszlo tu");
  console.log(req.body);
  arr = arr.filter((ele) => ele.id !== req.body.id);
  res.send(arr);
});

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
