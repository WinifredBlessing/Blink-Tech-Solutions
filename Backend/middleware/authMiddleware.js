const jwt = require('jsonwebtoken');

const protectAdmin = async (req, res, next) => {
  try {
    let token;
    
    // Check header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // Verify token with JWT
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error('Missing JWT_SECRET in environment');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    const decoded = jwt.verify(token, jwtSecret);

    const envEmail = process.env.Email ? process.env.Email.trim() : '';

    // Verify if user is admin
    if (decoded.email !== envEmail || decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized as admin' });
    }

    // Attach user to request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error.message);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

module.exports = { protectAdmin };
