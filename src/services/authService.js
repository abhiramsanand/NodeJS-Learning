const { User, Role } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async ({ name, username, password, role }) => {
  const roleInstance = await Role.findOne({ where: { name: role } });
  if (!roleInstance) throw new Error('Invalid role');

  const user = await User.create({ name, username, password, roleId: roleInstance.id });
  return user;
};

const login = async ({ username, password }) => {
  const user = await User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id, roleId: user.roleId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token, name: user.name }; // Include name in response
};

module.exports = { register, login };
