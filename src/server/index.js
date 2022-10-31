// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const express = require("express");
const app = express();
const router = express.Router()
const port = 3000;
const routes = require("./routes")

// use express' built in JSON parser
app.use(express.json());


// use express' built in JSON parser to read strings that are urlencoded
app.use(express.urlencoded({ extended: true }));

router.route("/").get(routes.getAllLibraries);
router.route("/jobs").get(routes.getAllJobs);
router.route("/jobs:id").get(routes.getJob);

app.use("/", router);




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
