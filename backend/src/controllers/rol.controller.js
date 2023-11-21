const Rol = require('../models/rol.model');

async function getRoles(req, res) {
  try {
    const roles = await Rol.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createRole(req, res) {
  const rol = new Rol(req.body);
  try {
    const newRol = await rol.save();
    res.status(201).json(newRol);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getRolById(req, res, next) {
  let rol;
  try {
    rol = await Rol.findById(req.params.id);
    if (rol === null) {
      return res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.rol = rol;
  next();
}

async function updateRol(req, res) {
  try {
    await Rol.findByIdAndUpdate(res.rol.id, req.body);
    const rolUpdated = await Rol.findById(res.rol.id);
    res.json(rolUpdated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteRol(req, res) {
  try {
    await Rol.findByIdAndDelete(res.rol.id);
    res.json({ message: 'Rol eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getRoles,
  createRole,
  getRolById,
  updateRol,
  deleteRol,
};
