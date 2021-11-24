const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    // const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'mynameisvictorjuma');
    req.token = decoded;
    next();
  } catch (err) {
    res.status(401).send({ loggedIn: false });
  }
};
