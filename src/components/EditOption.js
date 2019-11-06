import React from 'react';

const EditOption = (props) => (
    <div>
      <input className="edit-option_input" onChange={props.setText} type="text" placeholder="Edit Option" />
    </div>
  );

export default EditOption;