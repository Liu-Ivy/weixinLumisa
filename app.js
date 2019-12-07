const express = require("express");
const auth = require("./wechat/auth");

const app = express();

var WechatAPI = require("wechat-api");
var api = new WechatAPI(
  "wx1c1b3d9fd22394a6",
  "eWsGFfJCLuiLiQZUJHrkSq1UtDVDuWnUuD3en4eF0Qc"
);

app.use(auth());
app.listen(8080, () => console.log("Connecting to the port"));
