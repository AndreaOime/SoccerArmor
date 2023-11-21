const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

// Obtener todos los usuarios
async function getUsers(req, res) {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear un nuevo usuario
async function createUser(req, res) {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Obtener un usuario por su ID
async function getUserById(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

// Actualizar un usuario
async function updateUser(req, res) {
  try {
    await User.findByIdAndUpdate(res.user.id, req.body);
    const userUpdated = await User.findById(res.user.id);
    res.json(userUpdated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Eliminar un usuario
async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(res.user.id);
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  try {
    console.log("Aqui")
    const user = await User.findOne({ username });
    console.log("Aqui")

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' })
    }

    console.log("Aqui")
    const token = jwt.sign({ userId: user._id }, 'palabra_secreta', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login
};


