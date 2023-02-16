import {body} from "express-validator";

export const credentialValidation = [
    body('userName', 'Use valid email address').isEmail(),
    body('password', 'Too short password').isLength({ min: 5}),
];
