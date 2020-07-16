var config = require('../config');
var sendgrid = require('@sendgrid/mail')(config.sendgridkey);

exports.send = async(to, subject, body) => {
  sendgrid.send({
    to: to,
    from: 'lcs.dgl"outlook.com',
    subject: subject,
    html: body
  })
}