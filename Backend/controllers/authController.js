const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const envEmail = process.env.Email ? process.env.Email.trim() : '';
    const envPassword = process.env.Password ? process.env.Password.trim() : '';
    const jwtSecret = process.env.JWT_SECRET;

    if (!envEmail || !envPassword || !jwtSecret) {
      console.error('Missing environment variables for authentication');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    if (email === envEmail && password === envPassword) {
      // Generate JWT token
      const token = jwt.sign(
        { email: envEmail, role: 'admin' },
        jwtSecret,
        { expiresIn: '1d' }
      );

      res.status(200).json({
        message: 'Login successful',
        session: { access_token: token },
        user: { email: envEmail, role: 'admin' },
      });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
};
