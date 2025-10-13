import Joi from "joi"

export const createColumnSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
            "string.empty": `Column kiritilishi kerak`,
            "string.min": `Column nomi 2 belgidan kam bo'lmasligi kerak!`,
            "string.max": `Column nomi 100 belgidan oshmasligi kerak!`,
            "any.required": `Column nomi majburiy`
        }),

    orders: Joi.number()
        .integer()
        .min(0)
        .required()
        .messages({
            "number.base": `Order son bo'lishi kerak`,
            "number.integer": `Order butun son bo'lishi kerak!`,
            "number.min": `O dan katta yoki teng bo'lishi kerak!`,
            "any.required": `Order majburiy`
        })
});

export const updateColumnSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(100)
        .messages({
            'string.min': 'Column nomi kamida 2 ta belgidan iborat bo\'lishi kerak',
            'string.max': 'Column nomi 100 ta belgidan oshmasligi kerak'
        }),

    order: Joi.number()
        .integer()
        .min(0)
        .messages({
            'number.base': 'Order son bo\'lishi kerak',
            'number.integer': 'Order butun son bo\'lishi kerak',
            'number.min': 'Order 0 dan katta yoki teng bo\'lishi kerak'
        })
}).min(1).messages({
    'object.min': 'Kamida bitta maydon yangilanishi kerak'
});