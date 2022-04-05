const jwt = require('jsonwebtoken')
const { insertRecord } = require('../db_config/models')



exports.addUser = async (req, res, next) => {
    try {
        const result = await insertRecord(req.body);
        res.status(200).send({mag: 'Successfully added'});
    } catch (e) { next(e) }

}


exports.userLogin = async (req, res, next) => {
    try {
        const token = await jwt.sign(req.foundUser, "Quantum", { expiresIn:'24h' })
        res.status(200).send({msg: 'LOgged IN', data:{token} });
    } catch (e) { next(e)}

}