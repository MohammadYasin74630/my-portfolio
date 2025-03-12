"use client"
import 'reoverlay/lib/ModalWrapper.css';
import ModalWrapper from "./modalWraper";
import ContactForm from './contactForm';
import { useState } from 'react';

const ContactModal = () => {

    const [close, setClose] = useState(false)

    return (
        <ModalWrapper close={close} setClose={setClose}>
            <ContactForm setClose={setClose} />
        </ModalWrapper>
    )
}

export default ContactModal