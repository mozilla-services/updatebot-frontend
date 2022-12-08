// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const conn = require("./db");

// get all jobs in updatebot
exports.getAllJobs = (req, res, next) => {
   conn.query(`SELECT * FROM jobs`, function(err, data, fields) {
    res.status(200).json({
      status: "success",
      data,
      length: data?.length
    })
  })
};

// get all libraries (will possibly be updated)
exports.getAllLibraries = (req, res, next) => {
  conn.query(`SELECT DISTINCT library FROM jobs`, function(err, data, fields) {
   res.status(200).json({
     status: "success",
     data,
     length: data?.length
   })
 })
};

// get libraries with outstanding jobs
exports.getOutstandingLibraries = (req, res, next) => {
  conn.query(`SELECT DISTINCT library FROM jobs WHERE outcome NOT IN (4,5)`, function(err, data, fields) {
   res.status(200).json({
     status: "success",
     data,
     length: data?.length
   })
 })
};

// get single job by ID
exports.getJob = (req, res, next) => {
  if (!req.params.id) {
    return next(new Error("No job id found", 404));
  }
  conn.query(
    `SELECT * FROM jobs WHERE id = ?`,
    [req.params.id],
    function(err, data, fields) {
      res.status(200).json({
        status: "success",
        data,
        length: data?.length
      })
    }
  )
};

