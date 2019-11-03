import React from 'react';

const AddOption = (props) => (
      <div>
        {props.error && <p className="info-paragraph">{props.error}</p>}
        <form className="add-option" onSubmit={props.handleAddOption}>
          <input className="add-option__input" type="text" name="option" placeholder="Add option" />
          <button className="btn">Add Option</button>
        </form>
      </div>
    );

export default AddOption;