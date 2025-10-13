import Joi from "joi"


export const updateUserSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(100)
        .messages({
            "string.min": `Ism kamida 2 ta belgidan iborat bo'lishi kerak!`,
            "string.max": `Ism 100 ta belgidan oshmasligi kerak!`,
        }),

    email: Joi.string()
        .email()
        .messages({
            "string.email":`To'gri email formatini kiriting`
        }),

    password: Joi.string()
        .min(4)
        .messages({
            "string.min":`Parol kamida 4 belgidan iborat bo'lishi kerak!`
        })
}).min(3).messages({
    "object.min":`Kamida 3 ta ma'lumot belgi yangilanishi kerak!`
})