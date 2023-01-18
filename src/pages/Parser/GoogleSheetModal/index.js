import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modals({ show, handleClose, handleGoogleInputChange, handleGoogleCsv }) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Paste Google Sheet URL</Modal.Title>
                </Modal.Header>
                <Modal.Body><input type="text" onChange={handleGoogleInputChange} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleGoogleCsv}>
                        Import CSV
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

