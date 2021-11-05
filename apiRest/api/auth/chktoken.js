const webtoken = require('jsonwebtoken');
const users = require('../models/Users');

const tokensecret = ""+ process.env.TOKEN_SECRET;

module.exports.signToken = (id) => {
    console.log(id)
    return webtoken.sign({ id }, tokensecret, {
        //expiresIn: 60 * 60 * 24 * 365,
        expiresIn: 500 ,
    });
}


module.exports.checkToken = async (req, res, next) => {
    const token = req.headers.authorization;
   // console.log(token)
    if (!token) {
        return res.sendStatus(403);
    }
    webtoken.verify(token, tokensecret, async (err, decoded) => {
        if (decoded) {
            const { id } = decoded;
            let existe = await users.exists(id);
            console.log(existe)
            if (existe !== 0) {
              //  req.user = id;
                next();
            }
            else {
                res.status(403).json({ success: 0 });
            }
        }
        else {
            res.status(403).json({ success: 0 });
        }
    });
};