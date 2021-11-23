const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  const user = { username, password };
  const token = jwt.sign({ user }, 'applicationwithDIL', { expiresIn: '1h' }, () => {
    res.status(200).json({
      message: 'Authentication Successful',
      jwt: token,
    });
  });
  next();
};
