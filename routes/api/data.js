const express = require("express");
const router = express.Router();
const Habit = require("../../models/Habit");
const Validator = require("validator");
const isEmpty = require("is-empty");

// 
// router.get(
//   "/",
//   async (req, res) => {
//     const OWNER = {
//       id: req.user.id,
//       name: req.user.name,
//       email: req.user.email
//     };
//     await Habit.find({ owner: OWNER })
//       .then(habits => {
//         res.json(habits);
//       })
//       .catch(err => console.log(err));
//   }
// );


module.exports = router;
