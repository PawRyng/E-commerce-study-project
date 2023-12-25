module.exports = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(403).json({ message: 'Brak tokena autoryzacyjnego' });
    }
  
    jwt.verify(token, process.env.PRIVATE_JWT_TOKEN , (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Nieprawidłowy token' });
      }
  
      req.userId = decoded.userId;
      next();
    });
  };