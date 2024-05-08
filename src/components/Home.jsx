import React, { useState } from 'react';
import '../App.css';
import Modal from 'react-modal';
import Weather from './weather';

Modal.setAppElement('#root');

 export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Weather />
      </Modal>
    </div>
  );
}

