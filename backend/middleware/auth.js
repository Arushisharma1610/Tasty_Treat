// import jwt from "jsonwebtoken"


// const authMiddleware = async (req, res, next) => {
//     const {token} = req.headers;
//     if(!token){
//         return res.json({
//             success: false,
//             message: "Not Authrorized Login Again"
//         })
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     }catch (error){
//         console.log(error);
//         res.json({
//             success:false,
//             message:"Error"
//         })
//     }

// }


// export default authMiddleware;





import jwt from 'jsonwebtoken';
import Token from '../models/token.js';

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Check if the token exists in the Token table
    const tokenRecord = await Token.findOne({ where: { token } });
    if (!tokenRecord) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = tokenRecord.userId; // Use userId from Token table
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

export default authenticate;
