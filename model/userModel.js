// creating apis it will be intecratcing with db taking data from controller and controller takes data from frontend
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    prodname: {
      type: String,
      required: [true, "Product name is required"],
    },
    proddec: {
      type: String,
      required: [true, "Product description is required"],
    },
    prodprice: {
      type: String,
      required: [true, "Product price is required"],
    },
  });
  
export default mongoose.model("User", userSchema);
