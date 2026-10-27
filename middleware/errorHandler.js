const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

      if (res.headersSent) {             //prevents your handler from attempting to send a second response.
        return next(err);
    }

    res.status(500).json({
        message: "Internal Server Error"
    });
    
};

export default errorHandler;