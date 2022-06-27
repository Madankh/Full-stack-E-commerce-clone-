const router = require("express").Router();
const { verifyToken , verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Cart = require("../models/Cart");



///Create Cart
router.post("/" , verifyToken , async(req , res)=>{
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
        
    } catch (error) {
        res.status(500).json("Internal error occour")
    }
})


///Update
router.put("/:id" , verifyTokenAndAuthorization , async(req, res)=>{
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id , {
            $set: req.body
        },{new: true})
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

///Delete Cart
router.delete("/:id" , verifyTokenAndAuthorization, async(req , res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted..")
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get Cart
router.get("/find/:id" , async(req , res)=>{
    try {
        const cart = await Cart.findById(req.params.id);
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
})


//Get all
router.get("/" , async(req , res)=>{
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(err)
    }
})

module.exports = router