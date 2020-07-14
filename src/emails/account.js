const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
  sgMail.send({
    to : email,
    from: 'gogavekar.aditya@gmail.com',
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with this app.`,

  })
}

const cancellationEmail = (email,name) => {
  sgMail.send({
    to:email,
    from: 'gogavekar.aditya@gmail.com',
    subject: "Why deleting your account??",
    text: `Hey ${name} are you unsatisifed with the services we are providing you can always reach out to us.`
  })
}

module.exports = {
  sendWelcomeEmail,
  cancellationEmail,

}
