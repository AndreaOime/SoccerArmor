const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rol.controller');

router.get('/', rolController.getRoles);
router.post('/', rolController.createRole);

router.get('/:id', rolController.getRolById, (req, res) => {
  res.json(res.rol);
});

router.put('/:id', rolController.getRolById, rolController.updateRol);
router.delete('/:id', rolController.getRolById, rolController.deleteRol);

module.exports = router;
