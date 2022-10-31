// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const express = require('express');
const conn = require("./db");
const router = express.Router();

// get user lists
router.get('/jobs', function(req, res) {
  let sql = `SELECT * FROM jobs`;
  conn.query(sql, function(err, data, fields) {
    res.json({
      status: 200,
      data,
      message: "jobs lists retrieved successfully"
    })
  })
});

module.exports = router;
