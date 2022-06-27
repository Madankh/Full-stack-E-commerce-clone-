const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")


//Register
router.post("/register" ,[
    body('email', 'Enter your valid email').isEmail(),
    body('username', "Enter a valid username").isLength({ min: 3 }),
    body('password').isLength({ min: 5 })
], async (req , res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array("Some error occure")});
      }
      
    try {
        let user = await User.findOne({email : req.body.email});
        if(user){
            return res.status(400).json({error:"please try to login with credential"})
        }

        // const salt = await bcrypt.genSalt(10);
        // const secpass = await bcrypt.hash(req.body.password, salt)

///Create a new user
       user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password:CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC
                ).toString(),
        });
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error")
    }
    
})

//Login
router.post("/login" ,[
    body('email', 'Enter your valid email').isEmail(),
    body('password', 'password cannot be blank').exists(),

], async(req , res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array()});
  }


    try {
        let user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(400).json({error:"Please try to login with correct credendial"})
        };
       
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const Newpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        Newpassword!== req.body.password && res.status(400).json({error:"Please try to login with correct credendial"})

        const accessToken = jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC, 
        {expiresIn:"7d"})
        const {password , ...others} = user._doc

        res.json({...others , accessToken})
    } catch (error) {
        res.status(500).json("Internal servar error");
    }
})
module.exports = router;