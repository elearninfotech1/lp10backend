let express = require("express");
let Signup = require("../Model/signupModel");
let signupRouter = express.Router();

signupRouter.post("/signup", async (req, res) => {
  let signup = new Signup(req.body);
  let result = await signup.save();
  res.send(result);
});

signupRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await Signup.findOne({ email: email });
  if (user.password == password) {
    res.send("Valid");
  } else {
    res.send("Invalid");
  }
});

module.exports = signupRouter;
