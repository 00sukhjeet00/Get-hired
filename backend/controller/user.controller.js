const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");
const validator=require('validator')
const register = async (req, res) => {
  const { email, password, username, name,company,profession } = req.body;
    const validEmail = validator.isEmail(email);
    if (validEmail) {
      try {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({
          email,
          password: hashedPassword,
          name,
          profession,
          company,
        });
        user.save((err) => {
          if (err) return res.status(400).json({msg:"Something Went Worng"});
          return res.status(200).json({ msg: "User Register Sussecfully" });
        });
      } catch (error) {
        console.log(error);
      }
  }else{
    res.status(400).json({msg:"Not Vaild Email"});
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
    try {
      User.findOne({ email }, (err, user) => {
        if (err) throw err;
        if (!user) return res.status(401).json({ msg: "Not Vaild User" });
        else {
          if (!bcrypt.compareSync(password, user.password))
            return res.status(401).json({ msg: "Not Vaild User" });
          else {
            const token = jwt.sign(
              { userId: user._id, isAdmin: user.isAdmin },
              "Pasowrd1232"
            );
            return res.status(200).json({ token });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
};
module.exports = { login, register };
