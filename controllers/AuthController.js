// const User = require("../models/user");
// const jwt = require("jsonwebtoken");

// module.exports.signup = async (req, res) => {
//   console.log("Signup Hit");
//   try {
//     // Validation
//     const { name, email, password, password_confirm } = req.body;
//     if (!name) {
//       return res.json({ error: "Name is required" });
//     }
//     if (!email) {
//       return res.json({ error: "Email is required" });
//     }
//     if (!password || password.length < 6) {
//       return res.json({ error: "Password is required and should be 6 characters long" });
//     }
//     if (!password_confirm || password_confirm !== password) {
//       return res.json({ error: "Password confirmation does not match" });
//     }
//     const exist = await User.findOne({ email });
//     if (exist) {
//       return res.json({ error: "Email is taken" });
//     }
//     // Hash password (assuming you have a hashPassword function in your User model)
//     const hashedPassword = await User.hashPassword(password);
//     try {
//       const user = await new User({
//         name,
//         email,
//         password: hashedPassword,
//       }).save();
//       // Create signed token
//       const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: "7d",
//       });
//       const { password, ...rest } = user._doc;
//       return res.json({
//         token,
//         user: rest,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports.signin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({ error: "No user found" });
//     }
//     // Assuming you have a comparePassword method in your User model
//     const match = await User.comparePassword(password, user.password);
//     if (!match) {
//       return res.json({ error: "Wrong password" });
//     }
//     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });
//     user.password = undefined;
//     user.secret = undefined;
//     res.json({ token, user });
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send("Error. Try again.");
//   }
// };

// module.exports.forgotPassword = async (req, res) => {
//   return res.status(500).json({ error: "Forgot password feature not implemented" });
// };

// module.exports.resetPassword = async (req, res) => {
//   return res.status(500).json({ error: "Reset password feature not implemented" });
// };

const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports.signup = async (req, res) => {
  console.log("Signup Hit");
  try {
    // Validation
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({ error: "Name is required" });
    }
    if (!email) {
      return res.json({ error: "Email is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "Password is required and should be 6 characters long" });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email is taken" });
    }
    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();
      return res.json({ user });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Error saving user" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "No user found" });
    }
    // Compare password using bcrypt
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ error: "Wrong password" });
    }
    return res.json({ user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.forgotPassword = async (req, res) => {
  return res.status(500).json({ error: "Forgot password feature not implemented" });
};

module.exports.resetPassword = async (req, res) => {
  return res.status(500).json({ error: "Reset password feature not implemented" });
};
