const express = require("express");
const path = express();
const port = 9799;

path.get("/moffu", (req, res) => res.send("ye server mera hai..!!"));
path.listen(port, () => console.log(port));
