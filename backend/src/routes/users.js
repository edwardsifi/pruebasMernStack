const { Router } = require('express');
const router = Router();
const {getUsers, createUser, deleteUSer} = require('../controllers/users.controllers');

router.route('/')
      .get(getUsers)
      .post(createUser)

router.route('/:id')
      .delete(deleteUSer)

module.exports = router;