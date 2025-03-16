import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        const token = req.header("x-token");

        if (!token) {
            return res.status(400).send("Token Not Found");
        }

        const decode = jwt.verify(token, "jwtSecret");
        req.user = decode.user;
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

export default authMiddleware;
