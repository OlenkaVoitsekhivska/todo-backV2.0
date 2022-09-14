const bcrypt = require("bcrypt");
const { User } = require("../../models/user");

const register = async (req, res) => {
  const {email, password, username, phone} = req.body;
  console.log('this is request body',req.body)
  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json({
      message: `User with email ${email} already exists`,
    });
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({
    username,
    email,
    password:hashPassword,
    phone
  });
  res.status(201).json({
    message: "Success",    
  });
};

module.exports = register;
