const { insertRecord } = require('../db_config/models')

exports.addUser = async (req, res, next) => {
    try {
        // const result = await insertRecord(req.body);
        res.status(200).send({mag: 'Successfully added'});
    } catch (e) { next(e) }

}