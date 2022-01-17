const express = require("express");
const passwordController = require("../controllers/password");
const userController = require('../controllers/user');

const router = express.Router();

router.get("/add-password", passwordController.addPassword);

router.post("/addpassword", passwordController.postPassword);

router.get("/password-list", passwordController.passwordList);

router.get("/password-detail/:id", passwordController.passwordDetails);

router.get("/edit-password/:id", passwordController.editPassword);

router.post("/updatepassword/:id", passwordController.updatePassword);

router.get("/deletepassword/:id", passwordController.deletePassword);

router.get("/password/:id", passwordController.password)

router.get('/login', userController.login);

router.post('/validateLogin', userController.validateLogin);

router.get('/checkLogin', userController.checkLogin);

router.get('/register', userController.register);

router.post('/registerUser', userController.registerUser);

router.get("/", passwordController.index);

exports.routes = router;
