const express = require("express");
const StudentModel = require("../models/studentmodel");
const { SendResponse } = require("../helper/helper");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const result = await StudentModel.find();
    if (!result) {
      res.send(SendResponse(false, null, "No Data Found")).status(404);
    } else {
      res.send(SendResponse(true, result).status(200));
    }
  } catch (e) {
    console.log(e);
    res.send(SendResponse(false, null, "Internal Server Error")).status(400);
  }
});

route.get("/:id", (req, res) => {
  res.send("Get Single Student Data");
});

route.post("/", async (req, res) => {
  let { firstName, lastName, contact, course } = req.body;
  try {
    let errArr = [];
    if (!firstName) {
      errArr.push("Required: First Name");
    }
    if (!contact) {
      errArr.push("Required: Contact");
    }
    if (!course) {
      errArr.push("Required: Course");
    }
    if (errArr.length > 0) {
      res
        .send(SendResponse(false, errArr, null, "Required All Fields"))
        .status(400);
      return;
    } else {
      let obj = { firstName, lastName, contact, course };
      let student = new StudentModel(obj);
      await student.save();
      if (!student) {
        console.log(result);
        res
          .send(SendResponse(false, null, "Internal Server Error"))
          .status(400);
      } else {
        res.send(SendResponse(true, student, "Saved Successfully")).status(200);
      }
    }
  } catch (e) {
    console.log(e);
    res.send(SendResponse(false, null, "Internal Server Error")).status(400);
  }
});

route.put("/:id", (req, res) => {
  res.send("Edit Student Data");
});

route.delete("/:id", (req, res) => {
  res.send("Delete Student");
});

module.exports = route;
