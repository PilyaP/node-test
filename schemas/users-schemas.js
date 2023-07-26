import Joi from "joi";
import { emailRegexp } from "../constants/user-constants.js";

const userSignupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const userSigninSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
const subscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});
export default {
  userSignupSchema,
  userSigninSchema,
  subscriptionSchema,
};
