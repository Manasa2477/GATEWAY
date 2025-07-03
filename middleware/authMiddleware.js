const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const ACCESS_SECRET = "9876@#%@##!#"; // Use .env in production

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, ACCESS_SECRET);
    console.log("Decoded Token:", decoded);
    req.headers["x-user-id"] = decoded.id;
    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Unauthorized: Token expired" });
    }
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
