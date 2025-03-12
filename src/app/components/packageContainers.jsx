"use client"

import { ModalContainer } from 'reoverlay';
import { SnackbarProvider } from 'notistack'

function Container() {
    return (
        <>
            <ModalContainer />
            <SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: "bottom" }} />
        </>
    )
}

export default Container