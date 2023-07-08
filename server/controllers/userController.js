const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt=require("bcryptjs")



const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

const signUpUser = async (req,res) => {
    const {username,password} = req.body;
    try{
      const userDoc = await User.create({
        username,
        password:bcrypt.hashSync(password,salt),
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
  };
  const loginUser = async (req,res) => {
    const {username,password} = req.body;
    try{
      const userDoc = await User.findOne({username});
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
      // logged in
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json({
            id:userDoc._id,
            username,
          });
        });
      }else{
        res.status(400).json('wrong credentials.Please check the password');
      }
    } catch  {
      res.status(400).json('No Accounts found');
    }
  };



// const createToken = (_id) => {
//     return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
// }

// // login a user
// const loginUser = async (req, res) => {
//     const { email, password } = req.body

//     try {
//         const user = await User.login(email, password)

//         // create a token
//         const token = createToken(user._id)

//         res.status(200).json({ email, userName: user.userName,  token })
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

// // signup a user
// const signUpUser = async (req, res) => {
//     const { email, userName, password } = req.body

//     try {
//         const user = await User.signup(email, userName, password)

//         // create a token
//         const token = createToken(user._id)

//         res.status(200).json({ email, userName: user.userName, token })
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

module.exports = { signUpUser, loginUser }