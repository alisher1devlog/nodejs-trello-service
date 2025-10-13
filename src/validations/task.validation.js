import Joi from 'joi';

export const createTaskSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(200)
        .required()
        .messages({
            'string.empty': 'Task nomi kiritilishi shart',
            'string.min': 'Task nomi kamida 2 ta belgidan iborat bolishi kerak',
            'string.max': 'Task nomi 200 ta belgidan oshmasligi kerak',
            'any.required': 'Task nomi majburiy'
        }),

    orders: Joi.number()
        .integer()
        .min(0)
        .required()
        .messages({
            'number.base': 'Order son bolishi kerak',
            'number.integer': 'Order butun son bolishi kerak',
            'number.min': 'Order 0 dan katta yoki teng bolishi kerak',
            'any.required': 'Order majburiy'
        }),

    description: Joi.string()
        .allow('', null)
        .max(1000)
        .messages({
            'string.max': 'Tavsif 1000 ta belgidan oshmasligi kerak'
        }),

    userId: Joi.number()
        .integer()
        .positive()
        .allow(null)
        .messages({
            'number.base': 'User ID son bo\'lishi kerak',
            'number.integer': 'User ID butun son bo\'lishi kerak',
            'number.positive': 'User ID musbat son bo\'lishi kerak'
        }),

    columnId: Joi.number()
        .integer()
        .positive()
        .allow(null)
        .messages({
            'number.base': 'Column ID son bo\'lishi kerak',
            'number.integer': 'Column ID butun son bo\'lishi kerak',
            'number.positive': 'Column ID musbat son bo\'lishi kerak'
        })
});

export const updateTaskSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(200)
        .messages({
            'string.min': 'Task nomi kamida 2 ta belgidan iborat bo\'lishi kerak',
            'string.max': 'Task nomi 200 ta belgidan oshmasligi kerak'
        }),

    orders: Joi.number()
        .integer()
        .min(0)
        .messages({
            'number.base': 'Order son bolishi kerak',
            'number.integer': 'Order butun son bolishi kerak',
            'number.min': 'Order 0 dan katta yoki teng bolishi kerak'
        }),

    description: Joi.string()
        .allow('', null)
        .max(1000)
        .messages({
            'string.max': 'Tavsif 1000 ta belgidan oshmasligi kerak'
        }),

    userId: Joi.number()
        .integer()
        .positive()
        .allow(null)
        .messages({
            'number.base': 'User ID son bo\'lishi kerak',
            'number.integer': 'User ID butun son bo\'lishi kerak',
            'number.positive': 'User ID musbat son bo\'lishi kerak'
        }),

    columnId: Joi.number()
        .integer()
        .positive()
        .allow(null)
        .messages({
            'number.base': 'Column ID son bo\'lishi kerak',
            'number.integer': 'Column ID butun son bo\'lishi kerak',
            'number.positive': 'Column ID musbat son bo\'lishi kerak'
        })
}).min(1).messages({
    'object.min': 'Kamida bitta maydon yangilanishi kerak'
});