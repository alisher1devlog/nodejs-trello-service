import * as userModels from "../models/user.models.js"

export const registerUser = async (req,res)=>{
    try {
        const newUser = await userModels.createUser(req.body);
        res.status(201).send(`${newUser}`);
    } catch (err) {
        res.status(400).send({message:err.message});  
    }
}