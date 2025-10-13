const validate = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
            convert: true
        });
        if (error) {
            return res.status(400).send({
                success: false,
                message: `validation xatolik`,
                errors: error.details.map(detail => ({
                    field: detail.path.join("."),
                    message: detail.message
                }))
            });
        }

        req.body = value;
        next(); 
    };
};

export default validate;