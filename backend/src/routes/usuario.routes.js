const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

router.get('/:id', userController.getUserById, (req, res) => {
  res.json(res.user);
});

router.put('/:id', userController.getUserById, userController.updateUser);
router.delete('/:id', userController.getUserById, userController.deleteUser);
router.post('/auth', userController.login);

module.exports = router;
