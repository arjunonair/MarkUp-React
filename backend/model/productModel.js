import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique : true
    },
    image : {
        type: String
    },
    desc : {
        type :String,
        required : false
    },
    number : {
        type : Number,
        required : true
    }
})

export default mongoose.model("products",productSchema)