const { validationResult } = require('express-validator');

const validator = () => {
    return {
        validateUserData: (req, res) => {
            let errors = validationResult(req).array();
            if (errors.length > 0) {
                return res.status(422).json(errors);
            }
        }
    }
}
module.exports = validator;