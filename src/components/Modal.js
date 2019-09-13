import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal onRequestClose={props.handleClearOption} ariaHideApp={false} isOpen={!!props.selectedOption} contentLabel="Selected Option">
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearOption}>Cancel</button>
  </Modal>
);

export default OptionModal;