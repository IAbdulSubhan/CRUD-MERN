import express from 'express';
import userModel from '../model/prodModel.js';
import { create, getAll } from '../controller/prodController.js';

const route = express.Router();

route.post("/create", create);
route.get("/getAll", getAll);

export default route;