import dbConnect from "@/app/lib/dbConnect";
import nodemailer from "nodemailer"

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});


export async function POST(req) {

    const { from, to, subject, html } = await req.json();

    if (!to || !subject || !html) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    let mailOptions = {
        from,
        to,
        subject,
        html
    };

    try {
        const mail = await transporter.sendMail(mailOptions)
        mail.messageId = mail.messageId.replace(/<|>/g, "")
        mail.messageId = mail.messageId.replace(".", "․")
        const body = { ...mailOptions, message: mailOptions.html, messageId: mail.messageId, createdAt: new Date() }

        delete body.html

        if (mailOptions.from !== "md.yasin.dev1@gmail.com") {
            await dbConnect("emails").insertOne(body)
        }

        return new Response(JSON.stringify(mail), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}