import Prod from "../model/prodModel.js";

// ===============create api===============
export const create = async(req, res)=>{
    try {

        const prodData = new Prod(req.body);

        if(!prodData){
            return res.status(404).json({msg: "Prod data not found"});
        }

        await prodData.save();
        res.status(200).json({msg: "Prod created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}

// ===============api for fetching all records===============

export const getAll = async(req, res)=>{
    try {
        const prodData = await Prod.find();
        if(!prodData){
            return res.status(404).json({msg: "prod Data not found"});
        }

        res.status(200).json(prodData);
    } catch (error) {
        res.status(500).json({error: error});
    }
}


//new api to get specific record using its uniqu id 

export const getOne = async(req, res)=>{
    try {
        const id = req.params.id;
        const prodExist = await Prod.findById(id);
        if(!prodExist){
            res.status(404).json({msg: "Product not Found"})
        }
        res.status(200).json(prodExist);

    } catch (error) {
        res.status(500).json({error: error})
    }
}  