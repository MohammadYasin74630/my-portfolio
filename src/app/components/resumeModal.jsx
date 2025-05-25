"use client"
import 'reoverlay/lib/ModalWrapper.css';
import ModalWrapper from "./modalWraper";
import Pdf from './pdf';

const ResumeModal = ({ file }) => {

    return (
        <ModalWrapper bg="bg-white">
            <Pdf file={file} />
        </ModalWrapper>
    )
}

export default ResumeModal