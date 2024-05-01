import User from "../model/userModel.js";

export const create = async(req, res)=>{
    try {

        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "Prod data not found"});
        }

        await userData.save();
        res.status(200).json({msg: "Prod created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}