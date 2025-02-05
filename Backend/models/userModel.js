import mongoose from "mongoose";

const userSchma = new mongoose.Schema({
    name: {type: String, reqired:true},
    email: {type: String, reqired:true},
    password: {type: String, reqired:true, uniquw:true},
    cartData: {type: Object, default: []},
}, {minimize: false});

const userModel = mongoose.model("users", userSchma);
export default userModel; 