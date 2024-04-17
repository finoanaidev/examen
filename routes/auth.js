const express = require('express');
const router = express.Router();
const { signup, signin, forgotPassword, resetPassword } = require('../controllers/AuthController');

router.get("/", (req, res) => {
    return res.json({
        data: "Hello world from the api"
    });
});

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forget-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
