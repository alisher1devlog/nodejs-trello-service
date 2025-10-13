import Joi from "joi"

export const createAndUpdateBoardSchema = Joi.object({
    title: Joi.string()
        .min(1)
        .max(200)
        .required()
        .messages({
            "string.empty":`Board nomi kiritilishi shart`,
            "string.min":`Board nomi kamida 1 belgidan iborat bo'lishi kerak!`,
            "string.max":`Boardning uzunligi 200 belgigacha!`,
            "any.required":`Board nomi majburiy!`
        }),
});