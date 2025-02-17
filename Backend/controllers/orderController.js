import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
    try
    {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel( orderData )
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: { }})

        res.json({ success: true, message: "Order Placed!"})
    }
    catch(e)
    {
       console.log(e)
       res.json({success: false, message: e.message})
    }
}

const userOrder = async (req, res) => {
    try{
         const { userId } = req.body
         const orders = await orderModel.find({userId})
         res.json({success:true, orders})
    }
    catch(e)
    {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}

const allOrders = async (req, res) => {
    try
    {

    }
    catch(e)
    {

    }
}

const updateStatus = async (req, res) => {
    try
    {

    }
    catch(e)
    {

    }
}

const placeOrderStripe = async (req, res) => {
    try
    {

    }
    catch(e)
    {

    }
}

const placeOrderRazorpay = async (req, res) => {
    try
    {

    }
    catch(e)
    {

    }
}

export { placeOrder, userOrder, allOrders, updateStatus, placeOrderStripe, placeOrderRazorpay }