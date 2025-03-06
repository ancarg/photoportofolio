// http://mediargb.go.ro:8008/index
// http://127.0.0.1:3000/index
// http://localhost:3000/index

//maybe useful
//https://github.com/napcs/node-livereload

import express from "express";
import { join } from "path";

const app = express();
const port = 3000;

//app.use(express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  console.log("embed - GET");
  console.log(process.cwd());

  // eslint-disable-next-line no-undef
  res.sendFile(join(process.cwd(), "public/index-color.html"));
});

// set listen port
app.listen(port, function () {
  console.log("Example app listening on port" + port);
});
