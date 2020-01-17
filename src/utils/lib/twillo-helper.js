var client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendSmS = (payload) => {

  client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: payload.to,
    body: payload.body
  }).then((message) => console.log(message.sid));
}
// export default sendSmS;