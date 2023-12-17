import React from 'react'
import Modal from "components/Modal/Modal";
import { useState } from "react";
import { Button, P } from './Modal.styled';
function ModalWindow() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <P>
            <b>This app will help you save all your contacts!</b>
            <Button type="button" onClick={() => { setOpenModal(true) }}>Begin...</Button>
            {openModal && <Modal setOpenModal={setOpenModal} />}
        </P>
    )
}

export default ModalWindow;
