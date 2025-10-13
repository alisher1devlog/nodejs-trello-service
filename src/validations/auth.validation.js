import Joi from "joi"

export const registerSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
            "string.empty": `Ism kiritilishi shart`,
            "string.min": `Ism kamida 2 ta belgidan iborat bo'lishi kerak!`,
            "string.max": `Ism 100 ta belgidan oshmasligi kerak!`,
            "any.required": `Ism maydoni majburiy`
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.empty": "Email kiritilishi majburiy",
            "string.email": `Email maydonini to'g'ri kiriting!`,
            "any.required": `Email maydoni majburiy`
        }),

    password: Joi.string()
        .min(4)
        .required()
        .messages({
            "string.empty": `parol kiritilishi shart`,
            "string.min": `parol 4 xarfdan kam bo'lmasligi kerak!`,
            "any.required": `Email maydoni majburiy`
        })
});

export const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.empty": `Email kiritilishi shart`,
            "any.required": `Email maydoni majburiy`
        }),

    password: Joi.string()
        .required()
        .messages({
            "string.empty": `Parol kiritlishi shart`,
            "any.required": `Parol maydoni majburiy!`
        })
});