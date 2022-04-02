const { insertRecord } = require('../db_config/Queries')
const { sendMobileSMS } = require('../utils/TwilioSMS');

exports.addUser = async (req, res, next) => {
    try {
        const result = await insertRecord(req.body);
        res.status(200).send(result);
    } catch (e) { next(e) }

}

exports.feeSubmission = async (req, res, next) => {
    const { amount, schoolName, phoneNo  } = req.body;
    console.log(msg);
    try {
        const smsResult = await sendMobileSMS(msg, phoneNo);
        res.status(200).send(smsResult);
    } catch (e) { next(e) }

}