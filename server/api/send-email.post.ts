import * as nodemailer from 'nodemailer'
import handlebars from 'handlebars'

interface contactMailInterface {
    chosenClass: string,
    name: string,
    email: string,
    subject: string,
    message: string
    password: string
}

const selectableClasses = ['black-mage', 'monk', 'red-mage', 'thief', 'warrior', 'white-mage', 'bob']

export default eventHandler(async (event) => {

    const data: contactMailInterface = await readBody(event)

    let sent = false
    let message = ''

    const rawHtml = await useStorage().getItem('root:assets:email-templates:verification.html') // rename

    var html = handlebars.compile(rawHtml)

    if (data.password === "" && selectableClasses.includes(data.chosenClass)) {
        const toEmail: string = process.env.EMAIL_TO!
        const password: string = process.env.EMAIL_PASSWORD!

        const transporter = nodemailer.createTransport({
            host: 'mail.antagonism.fr',
            auth: {
                user: toEmail,
                pass: password
            },
            port: 465,
            secure: true,
            disableUrlAccess: true,
        })

        const mailOptions = {
            from: {
                name: data.name,
                address: data.email,
            },
            to: toEmail,
            subject: data.subject,
            html: html({ subject: data.subject, message: data.message, class: data.chosenClass, name: data.name }),
            attachments: [
                {
                    filename: data.chosenClass + ".gif",
                    path: "public/classes/" + data.chosenClass + ".gif",
                    cid: "class-played"
                }
            ]
        }

        try {
            await transporter.sendMail(mailOptions)
            sent = true
            message = `Thank you for your message, ${data?.name}!` // voir le succes
        } catch (e) {
            console.log(e)
            message = 'An error has occurred while sending the email. Please try it again.'
            sent = false
        }
    }
    else {
        console.log('bot detected')
        message = 'An error has occurred while sending the email. Please try it again.'
        sent = false
    }

    return {
        sent,
        message
    }

})