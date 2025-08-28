const User = require("../models/User");

// @desc Login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // MongoDB me check karo
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    return res.json({ success: true, message: "Login successful" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { loginUser };
