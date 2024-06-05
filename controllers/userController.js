import { userModel } from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, city, country, phone } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !address ||
      !city ||
      !country ||
      !phone
    ) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    const exisitingUser = await userModel.findOne({ email });

    if (exisitingUser) {
      return res.status(500).send({
        success: false,
        message: "Email already",
      });
    }

    const user = await userModel.create({
      name,
      email,
      password,
      address,
      city,
      country,
      phone,
    });

    res.status(201).send({
      success: true,
      message: "Registered successfully, please log in",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error in register API",
    });
  }
};
