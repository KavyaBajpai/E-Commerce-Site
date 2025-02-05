import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcryptjs';

const loginUser = async (req, res) => {

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

            const token = await 
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: "Internal Server Error" });
    }
}

const adminLogin = async (req, res) => {

}


export { loginUser, registerUser, adminLogin };