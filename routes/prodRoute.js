import express from 'express';
import userModel from '../model/prodModel.js';
import { create, getAll, getOne} from '../controller/prodController.js';

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);


export default route;