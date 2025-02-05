import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, reqired:true},
    description: {type: String, reqired:true},
    price: {type: Number, reqired:true},
    image: {type: Array, reqired:true},
    category: {type: String, reqired:true},
    subCategory: {type: String, reqired:true},
    sizes: {type: Array, reqired:true},
    bestseller: {type: Boolean, reqired:true},
    date: {type: Number, default: Date.now}
});


const productModel = mongoose.model("products", productSchema);

export default productModel;