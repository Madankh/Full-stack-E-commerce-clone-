const router = require("express").Router();
const { verifyToken , verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Order = require("../models/Order");



//Create Order
router.post("/"  , async(req , res)=>{
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
        
    } catch (error) {
        res.status(500).json("Internal error occour")
    }
})


///Update
router.put("/:id" , verifyTokenAndAdmin , async(req, res)=>{
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id , {
            $set: req.body
        },{new: true})
        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

///Delete Order
router.delete("/:id" , verifyTokenAndAdmin, async(req , res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted..")
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get 
router.get("/find/:id" , async(req , res)=>{
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(Order)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get all
router.get("/" , async(req , res)=>{
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(err)
    }
})

//Get monthly income
router.get("/income" , verifyTokenAndAdmin , async(req , res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()- 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            {$match: {createdAt: {$gte: previousMonth} } },
            {
                $project:{
                    month: {$month : "$createdAt"},
                    sales:"$amount"
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum: "$sales"}
                },

            },
        ]);
        
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json("Internal server Error")
    }
})

module.exports = router