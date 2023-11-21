const User = require('../models/user.model');
const Rol = require('../models/rol.model');
const jwt = require('jsonwebtoken');

// Obtener todos los usuarios
async function getUsers(req, res) {
  try {
    let users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Crear un nuevo usuario
async function createUser(req, res) {
  const user = new User(req.body);
  try {
    if (!user.admin) {
      const rol = await Rol.findOne({ code: "customer" });
      user.rol = rol._id;
    } else {
      const rol = await Rol.findOne({ code: "admin" });
      user.rol = rol._id;
    }
    let newUser = await user.save();
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
  const user = req.body;
  try {
    console.log(user);
    if (!user.admin) {
      const rol = await Rol.findOne({ code: "customer" });
      user.rol = rol._id;
    } else {
      const rol = await Rol.findOne({ code: "admin" });
      user.rol = rol._id;
    }
    await User.findByIdAndUpdate(res.user.id, user);
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
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' })
    }

    const isAdmin = user.admin;
    const payload = {
      username: user.username,
      isAdmin
    }

    console.log(payload);
    const token = jwt.sign(payload, 'palabra_secreta', { expiresIn: '1h' });
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