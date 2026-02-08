import * as nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "mail.antagonism.fr",
    port: 465,
    auth: {
        user: "test@antagonism.fr",
        pass: "x84,PnITl#"
    },
    secure: true,
});

export default eventHandler(async (event) => {
    await transporter.verify()
    return ("Server is ready to take our messages")
})