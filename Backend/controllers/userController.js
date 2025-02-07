import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
const loginUser = async (req, res) => {
    try{
          const { email, password } = req.body;

          const user = await userModel.findOne({ email });

          if(!user) {
              return res.status(400).json({success:false, message: "User not found" });
          }

          const isMatch = await bcrypt.compare(password, user.password);

          if(isMatch) {
              const token = generateToken(user._id);
              return res.json({success:true, user, token });
          }
          else {
              return res.status(400).json({success:false, message: "Invalid Credentials" });
          }
    }
    
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: "Internal Server Error" });
    }
}

const registerUser = async (req, res) => {
   
    try {
         const { name, email, password } = req.body;

         const exists = await userModel.findOne({ email });
            if (exists) {
                return res.status(400).json({success:false, message: "User already exists" });
            }

            if (!validator.isEmail(email)) {
                return res.status(400).json({success:false, message: "Invalid Email" });
            }

            if (password.length < 6) {
                return res.status(400).json({success:false, message: "Enter strong password" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new userModel({
                name, email, password: hashedPassword
            })

            const user = await newUser.save();

            const token = generateToken(user._id);

            res.json({success:true, user, token });
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: "Internal Server Error" });
    }
}

const adminLogin = async (req, res) => {
    try{
         const { email, password} = req.body

         if( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
             const token = jwt.sign(email+password, process.env.JWT_SECRET);   
             return res.json({success:true, token });
         }
         else 
         {
            res.json({success: false, message: "Invalid Credentials" });
         }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: "Internal Server Error" });
    }
}


export { loginUser, registerUser, adminLogin };