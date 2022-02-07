import React from 'react'
import Styles from '../styles/CreateProjectModal.module.css'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

const CreateProjectModal = () => {
    return (
        <Modal
            centered
            fade={false}
            size="lg"
            toggle={function noRefCheck(){}}
        >
            <ModalHeader toggle={function noRefCheck(){}}>
                Modal title
            </ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={function noRefCheck(){}}
                >
                    Do Something
                </Button>
                {' '}
                <Button onClick={function noRefCheck(){}}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateProjectModal