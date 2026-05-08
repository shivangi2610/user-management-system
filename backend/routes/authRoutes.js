// import express from 'express';
// import { login } from '../controllers/authController.js';

// const router = express.Router();
// router.post('/login', login);

// export default router;
const express = require("express");
const router = express.Router();

const {
  loginUser,
  registerUser
} = require("../controllers/authController");

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;