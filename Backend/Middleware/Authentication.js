const jwt=require('jsonwebtoken')
const authentication = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; 
    console.log(token)
  
    if (!token) return res.json({ message: 'No token' });
  
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
      req.body.user_id = decoded.id;  // Attach `user_id` to `req.body`
      // req.user = decoded; 
      next();
    } catch (err) {
      res.status(403).json({ message: 'Token is not valid' });
    }
  };

module.exports=authentication
