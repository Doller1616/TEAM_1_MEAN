const accountSid = 'ACc168a321cff3d1ba7e028312e4cbc403';
const authToken = 'take this token from account again "aa1..."';
const client = require('twilio')(accountSid, authToken);

//https://www.twilio.com/docs/sms/quickstart/node

exports.sendMobileSMS = async ( body , to) => {
 return await client.messages .create({
      body,
      to,
      from: '+19842309629' });
}