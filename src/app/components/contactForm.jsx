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
                    to: 'binodonprojukti@gmail.com',
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
                        from: 'binodonprojukti@gmail.com',
                        to: email.value,
                        subject: "Thank You!",
                        html: `
                            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                            <h2 style="color: #0056b3;">Thank You for Reaching Out!</h2>
                            <p>Hello ${email.value.split(/b/)[0]},</p>
                            <p>Thank you for reaching out through my portfolio website. I appreciate your message and will review it as soon as possible. If needed, I’ll get back to you shortly.</p>
                            <p>For reference, your inquiry has been stored with the following ID: <span style="font-weight: bold; color: #555;">${data.messageId}</span></p>
                            <p>If you have any additional details to share, feel free to reply to this email.</p>
                            <p>Looking forward to connecting!</p>
                            <p>Best regards,</p>
                            <p><strong>Mohammad yasin</strong></p>
                            <p>My CV: <a href="https://vroom-rents.web.app/" style="color: #007bff; text-decoration: none;">View My CV</a></p>
                            <p>My Portfolio Website: <a href="https://portfolio-mohammad-yasins-projects.vercel.app" style="color: #007bff; text-decoration: none;">Website</a></p>
                            <p>My Mobile No: <a href="tel:+8801774548996" style="color: #007bff; text-decoration: none;">01774548996</a></p>
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