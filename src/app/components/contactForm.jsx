"use client"

import TextareaAutosize from 'react-textarea-autosize';
import { enqueueSnackbar } from 'notistack'
import { useState } from 'react';

function ContactForm({ setClose }) {

    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        let formAlright = true;
        const form = e.target;
        const email = form.email;
        const message = form.message;

        if (!email.value) {
            enqueueSnackbar("plz enter a email !", { variant: "error" })
            email.style.border = "1px solid var(--color-error)"
            formAlright = false;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
            enqueueSnackbar("plz enter a valid email !", { variant: "error" })
            email.style.border = "1px solid var(--color-error)"
            formAlright = false;
        }
        else {
            email.style.border = "1px solid var(--color-success)"
        }

        if (!message.value) {
            enqueueSnackbar("plz enter a message !", { variant: "error" })
            message.style.border = "1px solid var(--color-error)"
            formAlright = false;
        }
        else {
            message.style.border = "1px solid var(--color-success)"
        }

        if (formAlright) {

            setLoading(true)

            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    from: email.value,
                    to: 'md.yasin.dev1@gmail.com',
                    subject: `msg from ${email.value}`,
                    html: message.value
                }),
            });

            const data = await res.json();

            if (res.ok) {
                enqueueSnackbar('Email sent!', { variant: "success" })

                fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        from: 'md.yasin.dev1@gmail.com',
                        to: email.value,
                        subject: "Thank You!",
                        html: `
                            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                            <h2 style="color: #0056b3;">Thank You for Reaching Out!</h2>
                            <p>Hello ${email.value.match(/[a-zA-Z]+/)[0]},</p>
                            <p>Thank you for reaching out through my portfolio website. I appreciate your message and will review it as soon as possible. If needed, I’ll get back to you shortly.</p>
                            <p>For reference, your inquiry has been stored with the following ID: <span style="font-weight: bold; color: #555;">${data.messageId}</span></p>
                            <p>If you have any additional details to share, feel free to reply to this email.</p>
                            <p>Looking forward to connecting!</p>
                            <p>Best regards,</p>
                            <p><strong>Mohammad yasin</strong></p>
                            <p>My CV: <a href="https://drive.google.com/file/d/16UI__zBJKmtuoU6RXYK8IOQ8dTnaBAcT/view?usp=sharing" style="color: #007bff; text-decoration: none;">View</a></p>
                            </div>

                            <div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature">
                                <div dir="ltr">
                                    <table width="472" cellpadding="0" cellspacing="0" border="0"
                                        style="border-spacing:0px;border-collapse:collapse;color:rgb(68,68,68);font-size:8pt;font-family:Arial,sans-serif;width:472px;background:transparent!important">
                                        <tbody>
                                            <tr>
                                                <td colspan="5" style="padding:0px;text-align:center;height:50px;vertical-align:top">
                                                    <img border="0" alt="Line" width="472" height="24"
                                                        src="https://www.mail-signatures.com/signature-generator/img/templates/blooming-sale/gradient-top.png"
                                                        style="border:0px;vertical-align:middle;width:472px;height:24px">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding:0px;font-size:8pt;line-height:14px;width:156px">
                                                    <span style="font-size:16pt;line-height:18pt;color:rgb(0,0,0);font-weight:bold">Md
                                                        Yasin<br></span><span style="font-size:8pt;line-height:14px;color:rgb(104,104,104)">MERN
                                                        Stack Developer<br></span><br><br><span>
                                                        <a href="https://www.facebook.com/mohammad.sahadat.587/" rel="noopener"
                                                            style="background-color:transparent;color:rgb(253, 209, 69)" target="_blank">
                                                            <img border="0" width="18" alt="facebook icon"
                                                                src="https://www.mail-signatures.com/signature-generator/img/templates/blooming-sale/fb.png"
                                                                style="border:0px;vertical-align:middle;height:18px;width:18px">
                                                        </a>&nbsp;</span>&nbsp;<span>
                                                        <a href="https://x.com/md_yasin_74630" rel="noopener"
                                                            style="background-color:transparent;color:rgb(253, 209, 69)" target="_blank">
                                                            <img border="0" width="18" alt="twitter icon"
                                                                src="https://www.mail-signatures.com/signature-generator/img/templates/blooming-sale/tt.png"
                                                                style="border:0px;vertical-align:middle;height:18px;width:18px">
                                                        </a>&nbsp;</span>&nbsp;<span>
                                                        <a href="https://wa.me/+8801845737600" rel="noopener"
                                                            style="background-color:transparent;color:rgb(253, 209, 69)" target="_blank">
                                                            <img border="0" width="18" alt="whatsapp icon"
                                                                src="https://www.mail-signatures.com/signature-generator/img/templates/blooming-sale/wa.png"
                                                                style="border:0px;vertical-align:middle;height:18px;width:18px">
                                                        </a>&nbsp;</span>&nbsp;<span>
                                                        <a href="https://t.me/mohammad_yasin74630" rel="noopener"
                                                            style="background-color:transparent;color:rgb(253, 209, 69)" target="_blank">
                                                            <img border="0" width="18" alt="telegram icon"
                                                                src="https://www.mail-signatures.com/signature-generator/img/templates/blooming-sale/tg.png"
                                                                style="border:0px;vertical-align:middle;height:18px;width:18px">
                                                        </a>&nbsp;</span>&nbsp;<span>
                                                        <a href="https://github.com/MohammadYasin74630" rel="noopener"
                                                            style="background-color:transparent;color:rgb(253, 209, 69)" target="_blank">
                                                            <img border="0" width="18" alt="github icon"
                                                                src="https://www.mail-signatures.com/signature-generator/img/templates/blooming-sale/gh.png"
                                                                style="border:0px;vertical-align:middle;height:18px;width:18px">
                                                        </a>&nbsp;</span>
                                                </td>
                                                <td style="padding:0px;width:10px"></td>
                                                <td style="padding:0px;width:117px;text-align:center">
                                                    <img alt="photograph" width="85" border="0"
                                                        src="https://lh3.googleusercontent.com/d/146P_OLqS8FmfypQYLkaFo6bXxsu8WxOl"
                                                        style="border:0px;vertical-align:middle;height:auto;width:85px">
                                                </td>
                                                <td style="padding:0px;width:20px"></td>
                                                <td width="212" style="padding:0px;width:170px">
                                                    <span style="font-size:8pt;line-height:14px;color:rgb(104,104,104)"><span
                                                            style="font-weight:700">M:</span>&nbsp;(+880) 1774548996<br></span><span
                                                        style="font-size:8pt;line-height:14px;color:rgb(104,104,104)">E:&nbsp;
                                                        <a href="mailto:md.yasin.dev1@gmail.com"
                                                            style="background-color:transparent;color:rgb(104,104,104);font-size:8pt"
                                                            target="_blank">
                                                            <span style="font-size:8pt;line-height:14px">md.yasin.dev1@gmail.com</span>
                                                        </a><br></span><span
                                                        style="padding:0px;margin-top:10px;margin-bottom:0px;text-align:right">
                                                        <a href="http://mohammad-yasin.vercel.app/" rel="noopener"
                                                            style="background-color:transparent;font-size:8pt;font-weight:bold;color:rgb(104,104,104)!important"
                                                            target="_blank">
                                                            <span style="font-size:8pt;font-weight:normal">mohammad-yasin.vercel.app</span>
                                                        </a><br></span><span
                                                        style="font-size:8pt;line-height:14px;color:rgb(104,104,104)">Chaktai<span
                                                            style="font-size:8pt;line-height:14px">,&nbsp;</span></span><span
                                                        style="font-size:8pt;line-height:14px;color:rgb(104,104,104)">Chittagong<span
                                                            style="font-size:8pt;line-height:14px">,&nbsp;</span></span><span
                                                        style="font-size:8pt;line-height:14px;color:rgb(104,104,104)">4000, BD</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="5" style="padding:25px 0px 0px;text-align:center">
                                                    <a href="https://www.linkedin.com/in/mohammadyasin74630" rel="noopener"
                                                        style="background-color:transparent;color:rgb(253, 209, 69)" target="_blank">
                                                        <img border="0" alt="Banner" width="472"
                                                            src="https://lh3.googleusercontent.com/d/1tLaUMBFikPR_9EgJd2L0_N88m3M2L29f"
                                                            style="border:0px;vertical-align:middle;width:472px;height:auto">
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `,
                    }),
                });

                setLoading(false)
                form.reset()
                setClose && setClose(true)
            } else {
                setLoading(false)
                enqueueSnackbar(`Failed to send email: ${data.error}`, { variant: "error" })
            }
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} noValidate>
                <fieldset className="fieldset min-[340px]:w-xs bg-base-200 border border-base-300 p-4 rounded-box" disabled={loading}>
                    <legend className="fieldset-legend">CONTACT</legend>

                    <label className="fieldset-label">Email <span className='font-sans text-error -ml-1'>*</span></label>
                    <input type="email" className="input" placeholder="Your Email" name="email" />

                    <label className="fieldset-label">Message <span className='font-sans text-error -ml-1'>*</span></label>
                    <TextareaAutosize className="min-h-10 p-3 input text-wrap" placeholder="Your Message" name="message" />

                    <button className="btn btn-neutral mt-4" type="submit">
                        {
                            loading ? "Loading..." : "Submit"
                        }
                    </button>
                </fieldset>
            </form>
        </>
    )
}

export default ContactForm