const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { token, name } = await authService.login(req.body); // Get name and token
    res.json({ token, name }); // Send name and token to the client
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { register, login };
