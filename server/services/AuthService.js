const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const User = require("../models/User");

exports.getAllUsers = async () => {
  const users = await User.findAll();
  return users;
}

exports.register = async (username, email, password) => {
  const user = await User.create({ username, email, password });
  const token = jwt.generateToken(user.id);
  return {token, user};
};

exports.login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  await bcrypt.compare(password, user.password);
  const token = jwt.generateToken(user.id);
  return {token, user};
};
