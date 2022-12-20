import React from 'react';
import ReactModal from 'react-modal';

const LoginModal = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <button></button>
      <div>모달 입니다.</div>
    </ReactModal>
  );
};

export default LoginModal;
