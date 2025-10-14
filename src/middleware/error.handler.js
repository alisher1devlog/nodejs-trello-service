const erorrHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    const message = err.message || `Serverda kutilmagan xatolik!`;

    console.error(`[${statusCode}] - ${message} - ${req.originalUrl} - ${req.method}`);

    console.error(err.stack);
    
    res.status(statusCode).send({
        message:message,
    });
}

export default erorrHandler;
