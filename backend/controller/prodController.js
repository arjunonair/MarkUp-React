import products from "../model/productModel.js";

export const createProd = async(req,res) =>{
    try {
        const product = new products(req.body)
        const productData = await product.save()
        if( product.length !== 0){
            return res.status(200).json({success:true, data:productData})
        }
        res.status(400).json({success : false, message: "product data not available"})
    } catch (error) {
        res.status(404).json({success : false, message: "product data error"})
    }
}

export const fetchProd = async(req,res) =>{
    try {
        const productData = await products.find()
        res.status(200).json({message : 'successful', data : productData})
    } catch (error) {
        res.status(400).json({message : 'failure'})
    }
}


export const updateProd = async(req,res) =>{
    try {
        const id = req.params.id;
        const product = await products.findOne({_id : id})

        if(!product){
            return res.status(400).json({message:"Product not found guys"})
        }
        const updatedProd = await products.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:'updated successfully',data:updatedProd})
    } catch (error) {
        res.status(400).json({message : 'failure'})
    }
}
