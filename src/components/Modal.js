import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal className="modal" closeTimeoutMS={200} onRequestClose={props.handleClearOption} ariaHideApp={false} isOpen={!!props.selectedOption} contentLabel="Selected Option">
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="btn" onClick={props.handleClearOption}>Cancel</button>
  </Modal>
);

export default OptionModal;