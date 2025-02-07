import cloudinary from 'cloudinary';
import productModel from '../models/productModel.js';
const addProduct = async (req,res) => {
   try {
            const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;
            const image1 = req.files?.image1?.[0]?.path || null;
            const image2 = req.files?.image2?.[0]?.path || null;
            const image3 = req.files?.image3?.[0]?.path || null;
            const image4 = req.files?.image4?.[0]?.path || null;
            const images = [image1, image2, image3, image4].filter((image)=> image!==null);
            //console.log("Received Files:", req.files);
            const validPrice = parseFloat(price);
            if (isNaN(validPrice)) {
            return res.status(400).json({ success: false, message: "Invalid price value" });
            }
            let imagesUrl = await Promise.all (
                images.map(async (image)=>{
                    let result = await cloudinary.uploader.upload(image, {resource_type: 'image'});
                    return result.secure_url;
                })
            )

            const productData = {
                name,
                description,
                price: validPrice,
                category,
                subCategory,
                sizes: JSON.parse(sizes),
                bestSeller: bestSeller==="true" ? true : false,
                image: imagesUrl,
                date: Date.now()
            }
            console.log("Product Data:", productData);
            const product = new productModel(productData);
            await product.save();
            //console.log("Extracted Data:", {name, description, price, category, subCategory, sizes, bestSeller} );
            //console.log("Images:",  {image1, image2, image3, image4} );
            //console.log("Images URL:", imagesUrl);
            res.json({success:true, message: "Product Added Successfully"});
        }
   catch (error) {
       console.log(error);
       return res.status(500).json({success:false, message: error.message });
   }
}

const listProducts = async (req, res ) => {
    try {
        const products = await productModel.find({});
        res.json({success:true, products});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: error.message });
    }
}

const removeProducts = async (req, res ) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message: "Product Removed Successfully"});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: error.message });
    }
}

const singleProducts = async (req, res ) => {
    try{
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success:true, product});
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message: error.message });
    }
}


export { addProduct, listProducts, removeProducts, singleProducts };