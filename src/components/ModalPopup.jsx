import React from 'react'

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";

const ModalPopup = ({openModal, setOpenModal, bodyMessage}) => {
    
    return (
        <>
            <Modal show={openModal} size="lg" position='top-center' onClose={() => setOpenModal(false)} popup>
                <ModalHeader className='bg-secondary rounded-t-md'/>
                <ModalBody className='bg-secondary  rounded-b-md'>
                <div className="text-center m-5">
                    <h3 className="mb-5 text-lg font-normal text-white dark:text-white">
                        {bodyMessage}
                    </h3>
                    <div className="flex justify-center gap-4">
                    {/* TODO: Create another button with the option to navigate to another page */}
                    <Button color="failure" className='rounded p-1 border-2 text-white hover:outline-double outline-white ' onClick={() => setOpenModal(false)}>
                        {"Entendido"}
                    </Button>
                    </div>
                </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ModalPopup
