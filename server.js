const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const ode = path.dirname(require.resolve("@cdk-web/ode"));

app.use(express.static("public"));
app.use(express.static(ode));
app.use("/dist", express.static(ode));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
