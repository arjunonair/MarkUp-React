import user from "../model/userModel.js";

export const fetch = async(req,res) =>{
    try {
        const userData = await user.find()
        
        if(userData.length === 0){
            return res.status(400).json({message : 'no data available'})
        }
        res.status(200).json({success:true, data:userData})
    } catch (error) {
        res.status(404).json({success : false, message : 'Search failed'})
    }
}


export const create = async(req,res) => {
    const userData = new user(req.body)
    try {
        const { email } = userData;
        const unique = await user.findOne({email})
        if(unique){
            return res.status(400).json({message : 'user already exits..'})
        }
        const savedUser = await userData.save()
        res.status(200).json({success : true, message : 'Creation successful',data: savedUser})
    } catch (error) {
        res.status(404).json({success : false, message : 'Creation failed'})
    }
}
//async multiple process can be run at same time