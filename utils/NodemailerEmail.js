const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
var options = {
    auth: {
        //take it from sendgrid (https://app.sendgrid.com) abhardwaj1@kloudrac.com
        api_key: 'SG.7...'
    }
}

const mailer = nodemailer.createTransport(sgTransport(options));


const emailTemplate = (verifyCode) => `<b style="color: green"> ${verifyCode} </b>`;

const sendMailTo = async (emailsArr, code) => {
    var email = {
        to: emailsArr,
        from: 'abhardwaj1@kloudrac.com', //registered Email on sendgrid
        subject: 'Hi there',
        text: 'Awesome sauce',
        html: emailTemplate(code)
    };

    const result = new Promise((resolve, reject) => {

        mailer.sendMail(email, function (err, res) {
            if (err) {
                reject(err)
            }
            resolve(res)
        });

    })

    return await result

}

module.exports = sendMailTo;
