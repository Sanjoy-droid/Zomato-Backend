var jwt = require("jsonwebtoken");
const JWT_SECRET = "Sanjoy-droid Z0mat0 Cl0ne";

const fetchuser = (req, res, next) => {
  // Get the user from JWT Token and id to the object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;

    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
