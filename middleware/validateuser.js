
const validateUser = (req, res, next) => {
    const { name, gmail } = req.body;

    if (
        typeof name !== "string" ||  name.trim() === ""   ||
        typeof gmail !== "string" || gmail.trim() === ""
    ) {
        return res.status(400).send(
            "Message: name and gmail must be non-empty strings!"
        );
    }

    next();
};

export default validateUser;
