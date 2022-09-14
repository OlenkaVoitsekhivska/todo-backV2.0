const { User } = require("../../models/user");

const getCurrent = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findById(_id);

  res.status(200).json({
    email: result.email,
    username: result.username
  });
};

module.exports = getCurrent;
