import React from 'react';

const Option = (props) => (
  <div className="option">
    <p>{props.count}. {props.optionText}</p>
    <button className="btn-big btn btn--link" onClick={(e) => {
      props.handleDeleteOption(props.optionText);
    }}>X</button>
  </div>
);

export default Option;