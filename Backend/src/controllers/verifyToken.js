const jwt = require('jsonwebtoken')
const token_secreto =  process.env.TOKEN_SECRET


function verifyToken (req, res,next) {
    const token = req.headers['x-access-token']
    if(!token){
      return res.status(401).json({auth:false,message: 'no tienes el token'})
    }
    const decoded =  jwt.verify(token,token_secreto);

    req.id = decoded.id
    next();
}

module.exports = verifyToken;