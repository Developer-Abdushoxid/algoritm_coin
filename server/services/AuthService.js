
const jwt = require("../utils/jwt");
const Admin = require("../models/Admin");

exports.getAllAdmins = async () => {
  const users = await Admin.findAll();
  return users;
}

exports.register = async (username, email, password) => {
  const user = await Admin.create({ username, email, password });
  const token = jwt.generateToken(user.id);
  return {token, user};
};

exports.login = async (email, password) => {
  const user = await Admin.findOne({ where: { email } });
  await bcrypt.compare(password, user.password);
  const token = jwt.generateToken(user.id);
  return {token, user};
};
