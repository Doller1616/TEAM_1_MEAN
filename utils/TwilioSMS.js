const accountSid = 'ACc168a321cff3d1ba7e028312e4cbc403';
const authToken = '06b5b2eb6754c4cab19a7037519e9169';
const client = require('twilio')(accountSid, authToken);


exports.sendMobileSMS = async ( body , to) => {
 return await client.messages .create({
      body,
      to,
      from: '+19842309629' });
}