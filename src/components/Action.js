import React from 'react';

const Action = (props) => (
  <div>
    <button className="button" disabled={!props.hasOptions} onClick={props.handlePick}>Randomly Decide!</button>
  </div>
);

export default Action;