const { insertRecord } = require('../db_config/Queries');
const { sendMobileSMS } = require('../utils/TwilioSMS');
const SendConfirmationMail = require('../utils/NodemailerEmail')

exports.addUser = async (req, res, next) => {
    try {
        const result = await insertRecord(req.body);
        res.status(200).send(result);
    } catch (e) { next(e) }

}

exports.feeSubmission = async (req, res, next) => {
    const { amount, schoolName, phoneNo  } = req.body;
    const msg = `${amount} Rs submitted for ${new Date()} for class Vth. School ${schoolName}`
    try {
        // const smsResult = await sendMobileSMS(msg, phoneNo);
        const emailResult = await SendConfirmationMail(['abbhishekbbhardwaj@gmail.com'], 5656);
        // res.status(200).send(smsResult);
        res.status(200).send(emailResult);
    } catch (e) { next(e) }

}