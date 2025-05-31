import Joi from "joi";

// Register User Validator
export const resgisterUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid("user", "admin").default("user")
});

// Login User Validator
export const loginUserValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});