import moongoose from "mongoose";

const userSchema = new moongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email adready taken"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [6, "password length should be greater the 6 character"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    city: {
      type: String,
      required: [true, "city name is required"],
    },
    country: {
      type: String,
      required: [true, "country name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    profilePic: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("Users", userSchema);
