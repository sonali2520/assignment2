import Data from "../models/data.js";

export const myData=async(req,res)=>{
    const posts=await Data.find({});
    res.json({
        success:true,
        posts,
    })
}