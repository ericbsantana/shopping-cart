const above = require("./data/acima10.json");
const below = require("./data/abaixo10.json");

const express = require("express");
const router = express.Router();
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
router.get("/above", (req, res) => {
  res.send(JSON.stringify(above));
});

router.get("/below", (req, res) => {
  res.send(JSON.stringify(below));
});

app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
