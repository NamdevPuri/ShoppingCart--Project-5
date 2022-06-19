const jwt = require('jsonwebtoken')
const userController = require('../Controllers/userController')



const auth = async (req, res, next) => {
try {
  let token = req.headers["authorization"];

  if (!token)
    return res.status(403).send({ status: false, msg: "Token is required" });

    let splitToken = token.split(" ")
    let tokenvalue = splitToken[1]

  jwt.verify(tokenvalue, "ShippingCart_Group43", { ignoreExpiration: true, }, function (err, decoded) {
    if (err) { return res.status(400).send({ status: false, meessage: "token invalid" }) }
    else {
      if (Date.now() > decoded.exp * 1000) {
        return res.status(401).send({ status: false, msg: "Session Expired", });
      }
    
      req.userId = decoded.userId;
      next();
    }
  });
}
catch (err) {
  return res.status(500).send({ err: err.message })
}
}

module.exports.auth = auth