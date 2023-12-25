const router = require("express").Router();

const  { loginUser, registerUser } = require('../Controller/User');

router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router